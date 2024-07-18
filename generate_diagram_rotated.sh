#!/usr/bin/env sh

# generate slices of data
tac data.csv                                                           | sed -n '0~48p' > data_all.csv
tac data.csv | sed -n "1,/$(date --date='year ago'  +'%y-%m-%d_00')/p" | sed -n '0~48p' > data_year.csv
tac data.csv | sed -n "1,/$(date --date='month ago' +'%y-%m-%d_00')/p" | sed -n '0~24p' > data_month.csv
tac data.csv | sed -n "1,/$(date --date='-7days'    +'%y-%m-%d_00')/p" | sed -n '0~6p'  > data_week.csv
tac data.csv | sed -n "1,/$(date --date='-1day'     +'%y-%m-%d_%H')/p"                  > data_day.csv

gnuplot << 'EOF'
# disable legend
set nokey

set datafile separator ','

set grid ls 1 lw .25 lc black xtics ytics

set xlabel "Temperature [°C]"
set xrange [10:34]
set xtics 0,2,35
#set y2tics 0,2,35 mirror

set ylabel "Date"
set timefmt "%y-%m-%d_%H:%M"  # specify our time string format
set ydata time # tells gnuplot the x axis is time data

set term svg size 800,3000

set title "Pi Temperature Logger - All"
set format y "%d.%m.%y" # otherwise it will show only MM:SS
set output "images/diagrams/all.svg"
plot "data_all.csv" using 2:1 with linespoints pointtype 7 pointsize .2 linecolor 2

set title "Pi Temperature Logger - Year"
set format y "%d.%m.%y" # otherwise it will show only MM:SS
set output "images/diagrams/year.svg"
plot "data_year.csv" using 2:1 with linespoints pointtype 7 pointsize .2 linecolor 2

set title "Pi Temperature Logger - Month"
set format y "%d.%m.%y" # otherwise it will show only MM:SS
set output "images/diagrams/month.svg"
plot "data_month.csv" using 2:1 with linespoints pointtype 7 pointsize .2 linecolor 2

set title "Pi Temperature Logger - Week"
set format y "%A"
set output "images/diagrams/week.svg"
plot "data_week.csv" using 2:1 with linespoints pointtype 7 pointsize .2 linecolor 2

set title "Pi Temperature Logger - Day"
set format y "%H:%M"
set output "images/diagrams/day.svg"
plot "data_day.csv" using 2:1 with linespoints pointtype 7 pointsize .2 linecolor 2
EOF
