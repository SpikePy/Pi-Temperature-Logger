#!/usr/bin/env sh

meassurements_per_hour=4
meassurements_per_day=$(( meassurements_per_hour * 24 ))
meassurements_per_week=$(( meassurements_per_day * 7 ))
meassurements_per_month=$(( meassurements_per_day * 30 ))

tail -n +2 data.js | tr -d '"[] ;' | cut -d',' -f1,2  > data_all.csv
cat data_all.csv   | head -${meassurements_per_month} > data_month.csv
cat data_month.csv | head -${meassurements_per_week}  > data_week.csv
cat data_week.csv  | head -${meassurements_per_day}   > data_day.csv

gnuplot -p diagram.gnuplot