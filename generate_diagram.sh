#!/usr/bin/env sh

meassurements_per_hour=4
meassurements_per_day=$(( meassurements_per_hour * 24 ))
meassurements_per_week=$(( meassurements_per_day * 7 ))
meassurements_per_month=$(( meassurements_per_day * 30 ))

tail -n +2 data.js | tr -d '"[] ;' | cut -d',' -f1,2  > data_all.csv
cat data_all.csv   | head -${meassurements_per_month} > data_month.csv
cat data_month.csv | head -${meassurements_per_week}  > data_week.csv
cat data_week.csv  | head -${meassurements_per_day}   > data_day.csv

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

set output "diagram_all.svg"
plot "data_all.csv" using 1:2 with lines lw 2 lc 2

set output "diagram_month.svg"
plot "data_month.csv" using 1:2 with lines lw 2 lc 2

set format x "%y-%m-%d %A"
set output "diagram_week.svg"
plot "data_week.csv" using 1:2 with lines lw 2 lc 2

set format x "%y-%m-%d %A %H:%M"
set output "diagram_day.svg"
plot "data_day.csv" using 1:2 with lines lw 2 lc 2
EOF