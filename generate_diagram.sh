#!/usr/bin/env sh

# generate slices of data
tac data.csv       | sed -n "1,/$(date --date='month ago' +'%y-%m-%d_%H:00')/p" > data_month.csv
cat data_month.csv | sed -n "1,/$(date --date='week ago'  +'%y-%m-%d_%H:00')/p" > data_week.csv
cat data_week.csv  | sed -n "1,/$(date --date='yesterday' +'%y-%m-%d_%H:00')/p" > data_day.csv

gnuplot << 'EOF'
set title "Temperature Log"

# disable legend
set nokey

set datafile separator ','

set grid ls 1 lw .25 lc black xtics ytics

set ylabel "Temperature [°C]"
set yrange [10:34]
set ytics 0,2,35

set xlabel "Date"
set timefmt "%y-%m-%d_%H:%M"  # specify our time string format
set format x "%y-%m-%d" # otherwise it will show only MM:SS
set xdata time # tells gnuplot the x axis is time data
set xrange [* : *] reverse
set xtics rotate by -90

set term svg size 2000,700

set format x "%y-%m-%d %A"
set output "diagram_all.svg"
plot "data.csv" using 1:2 with points pointtype 7 pointsize .2 linecolor 2

set format x "%y-%m-%d %A"
set output "diagram_month.svg"
plot "data_month.csv" using 1:2 with points pointtype 7 pointsize .2 linecolor 2

set format x "%A"
set output "diagram_week.svg"
plot "data_week.csv" using 1:2 with points pointtype 7 pointsize .2 linecolor 2

set format x "%A %H:%M"
set output "diagram_day.svg"
plot "data_day.csv" using 1:2 with points pointtype 7 pointsize .2 linecolor 2
EOF
