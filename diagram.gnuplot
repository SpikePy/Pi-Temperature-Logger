set title "Temperature Log" 

set xlabel "Date"
set xdata time # tells gnuplot the x axis is time data

set ylabel "Temperature [°C]"
set yrange [0:35]

# disable legend
set nokey

set datafile separator ','

set timefmt "%y-%m-%d%H:%M"  # specify our time string format
set format x "%y-%m-%d" # otherwise it will show only MM:SS

set term svg size 1000,500

set output "diagram_all.svg"
plot "data_all.csv" using 1:2 with lines

set output "diagram_month.svg"
plot "data_month.csv" using 1:2 with lines

set output "diagram_week.svg"
plot "data_week.csv" using 1:2 with lines

set output "diagram_day.svg"
plot "data_day.csv" using 1:2 with lines