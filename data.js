const data = [
    ["22-07-19 02:00", 28.3, 985],
    ["22-07-19 01:45", 28.1, 985],
    ["22-07-19 01:30", 28.0, 985],
    ["22-07-19 01:15", 27.9, 986],
    ["22-07-19 01:00", 27.8, 985],
    ["22-07-19 00:45", 27.7, 986],
    ["22-07-19 00:30", 27.5, 986],
    ["22-07-19 00:15", 27.4, 986],
    ["22-07-19 00:00", 27.3, 986],
    ["22-07-18 23:45", 27.3, 986],
    ["22-07-18 23:30", 27.2, 986],
    ["22-07-18 23:15", 27.1, 986],
    ["22-07-18 23:00", 27.1, 986],
    ["22-07-18 22:45", 27.1, 986],
    ["22-07-18 22:30", 27.0, 986],
    ["22-07-18 22:15", 27.1, 986],
    ["22-07-18 22:00", 27.2, 986],
    ["22-07-18 21:45", 27.4, 986],
    ["22-07-18 21:30", 27.6, 986],
    ["22-07-18 21:15", 27.8, 986],
    ["22-07-18 21:00", 27.2, 984],
    ["22-07-18 20:45", 28.1, 986],
    ["22-07-18 20:30", 28.1, 986],
    ["22-07-18 20:15", 28.1, 986],
    ["22-07-18 20:00", 28.1, 986],
    ["22-07-18 19:45", 28.0, 986],
    ["22-07-18 19:30", 27.8, 986],
    ["22-07-18 19:15", 27.9, 986],
    ["22-07-18 19:00", 27.9, 986],
    ["22-07-18 18:45", 28.0, 986],
    ["22-07-18 18:30", 28.0, 986],
    ["22-07-18 18:15", 28.1, 986],
    ["22-07-18 18:00", 28.2, 986],
    ["22-07-18 17:45", 28.2, 986],
    ["22-07-18 17:30", 28.3, 986],
    ["22-07-18 17:15", 28.3, 986],
    ["22-07-18 17:00", 28.4, 986],
    ["22-07-18 16:45", 28.5, 986],
    ["22-07-18 16:30", 28.6, 986],
    ["22-07-18 16:15", 28.6, 986],
    ["22-07-18 16:00", 28.7, 986],
    ["22-07-18 15:45", 28.8, 986],
    ["22-07-18 15:30", 28.8, 986],
    ["22-07-18 15:15", 28.9, 986],
    ["22-07-18 15:00", 29.0, 986],
    ["22-07-18 14:45", 29.0, 986],
    ["22-07-18 14:30", 29.1, 986],
    ["22-07-18 14:15", 29.2, 986],
    ["22-07-18 14:00", 29.3, 986],
    ["22-07-18 13:45", 29.3, 988],
    ["22-07-18 13:30", 29.4, 986],
    ["22-07-18 13:15", 29.5, 987],
    ["22-07-18 13:00", 29.6, 987],
    ["22-07-18 12:45", 29.7, 987],
    ["22-07-18 12:30", 29.8, 987],
    ["22-07-18 12:15", 29.8, 987],
    ["22-07-18 12:00", 29.9, 987],
    ["22-07-18 11:45", 30.0, 987],
    ["22-07-18 11:30", 30.0, 987],
    ["22-07-18 11:15", 30.1, 987],
    ["22-07-18 11:00", 30.2, 986],
    ["22-07-18 10:45", 30.2, 986],
    ["22-07-18 10:30", 30.2, 986],
    ["22-07-18 10:15", 30.3, 987],
    ["22-07-18 10:00", 30.3, 986],
    ["22-07-18 09:45", 30.3, 987],
    ["22-07-18 09:30", 30.3, 986],
    ["22-07-18 09:15", 30.3, 986],
    ["22-07-18 09:00", 30.2, 986],
    ["22-07-18 08:45", 30.2, 986],
    ["22-07-18 08:30", 30.1, 986],
    ["22-07-18 08:15", 30.0, 986],
    ["22-07-18 08:00", 29.8, 986],
    ["22-07-18 07:45", 29.7, 987],
    ["22-07-18 07:30", 29.5, 987],
    ["22-07-18 07:15", 29.4, 987],
    ["22-07-18 07:00", 29.2, 987],
    ["22-07-18 06:45", 29.1, 987],
    ["22-07-18 06:30", 29.0, 987],
    ["22-07-18 06:15", 28.8, 987],
    ["22-07-18 06:00", 28.7, 987],
    ["22-07-18 05:45", 28.6, 988],
    ["22-07-18 05:30", 28.4, 988],
    ["22-07-18 05:15", 28.3, 988],
    ["22-07-18 05:00", 28.2, 988],
    ["22-07-18 04:45", 28.0, 988],
    ["22-07-18 04:30", 27.8, 988],
    ["22-07-18 04:15", 27.7, 988],
    ["22-07-18 04:00", 27.5, 988],
    ["22-07-18 03:45", 27.3, 988],
    ["22-07-18 03:30", 27.1, 988],
    ["22-07-18 03:15", 26.9, 988],
    ["22-07-18 03:00", 26.7, 988],
    ["22-07-18 02:45", 26.6, 989],
    ["22-07-18 02:30", 26.4, 989],
    ["22-07-18 02:15", 26.2, 989],
    ["22-07-18 02:00", 26.1, 989],
    ["22-07-18 01:45", 25.9, 989],
    ["22-07-18 01:30", 25.7, 989],
    ["22-07-18 01:15", 25.6, 989],
    ["22-07-18 01:00", 25.5, 989],
    ["22-07-18 00:45", 25.3, 989],
    ["22-07-18 00:30", 25.2, 989],
    ["22-07-18 00:15", 25.1, 989],
    ["22-07-18 00:00", 25.0, 989],
    ["22-07-17 23:45", 24.9, 989],
    ["22-07-17 23:30", 24.8, 989],
    ["22-07-17 23:15", 24.7, 989],
    ["22-07-17 23:00", 24.1, 988],
    ["22-07-17 22:45", 24.8, 990],
    ["22-07-17 22:30", 24.9, 990],
    ["22-07-17 22:15", 25.0, 990],
    ["22-07-17 22:00", 25.1, 990],
    ["22-07-17 21:45", 25.2, 990],
    ["22-07-17 21:30", 25.4, 990],
    ["22-07-17 21:15", 25.4, 990],
    ["22-07-17 21:00", 25.1, 990],
    ["22-07-17 20:45", 21.8, 986],
    ["22-07-17 20:30", 24.9, 991],
    ["22-07-17 20:15", 24.9, 991],
    ["22-07-17 20:00", 24.9, 991],
    ["22-07-17 19:45", 24.5, 991],
    ["22-07-17 19:30", 24.6, 991],
    ["22-07-17 19:15", 24.8, 991],
    ["22-07-17 19:00", 25.0, 991],
    ["22-07-17 18:45", 25.3, 991],
    ["22-07-17 18:30", 26.2, 991],
    ["22-07-17 18:15", 25.7, 991],
    ["22-07-17 18:00", 25.4, 991],
    ["22-07-17 17:45", 25.6, 991],
    ["22-07-17 17:30", 25.4, 991],
    ["22-07-17 17:15", 24.4, 992],
    ["22-07-17 17:00", 24.6, 991],
    ["22-07-17 16:45", 24.6, 992],
    ["22-07-17 16:30", 24.8, 992],
    ["22-07-17 16:15", 25.0, 992],
    ["22-07-17 16:00", 25.3, 992],
    ["22-07-17 15:45", 25.6, 992],
    ["22-07-17 15:30", 26.1, 992],
    ["22-07-17 15:15", 26.6, 992],
    ["22-07-17 15:00", 26.5, 992],
    ["22-07-17 14:45", 26.3, 993],
    ["22-07-17 14:30", 26.1, 992],
    ["22-07-17 14:15", 25.8, 993],
    ["22-07-17 14:00", 25.4, 993],
    ["22-07-17 13:45", 25.7, 993],
    ["22-07-17 13:30", 25.4, 993],
    ["22-07-17 13:15", 26.0, 993],
    ["22-07-17 13:00", 26.3, 993],
    ["22-07-17 12:45", 26.5, 993],
    ["22-07-17 12:30", 26.4, 993],
    ["22-07-17 12:15", 26.1, 993],
    ["22-07-17 12:00", 25.8, 993],
    ["22-07-17 11:45", 25.5, 993],
    ["22-07-17 11:30", 25.2, 993],
    ["22-07-17 11:15", 25.0, 993],
    ["22-07-17 11:00", 24.3, 994],
    ["22-07-17 10:45", 24.0, 993],
    ["22-07-17 10:30", 23.9, 993],
    ["22-07-17 10:15", 23.8, 993],
    ["22-07-17 10:00", 24.0, 993],
    ["22-07-17 09:45", 24.1, 994],
    ["22-07-17 09:30", 24.1, 994],
    ["22-07-17 09:15", 24.4, 994],
    ["22-07-17 09:00", 24.1, 993],
    ["22-07-17 08:45", 23.7, 993],
    ["22-07-17 08:30", 22.3, 993],
    ["22-07-17 08:15", 22.2, 993],
    ["22-07-17 08:00", 22.1, 993],
    ["22-07-17 07:45", 22.0, 993],
    ["22-07-17 07:30", 21.8, 993],
    ["22-07-17 07:15", 21.6, 993],
    ["22-07-17 07:00", 21.3, 993],
    ["22-07-17 06:45", 21.0, 993],
    ["22-07-17 06:30", 20.8, 993],
    ["22-07-17 06:15", 20.7, 993],
    ["22-07-17 06:00", 20.6, 993],
    ["22-07-17 05:45", 20.5, 993],
    ["22-07-17 05:30", 20.6, 993],
    ["22-07-17 05:15", 20.7, 993],
    ["22-07-17 05:00", 20.7, 993],
    ["22-07-17 04:45", 20.9, 993],
    ["22-07-17 04:30", 20.9, 993],
    ["22-07-17 04:15", 20.9, 993],
    ["22-07-17 04:00", 21.1, 993],
    ["22-07-17 03:45", 21.2, 993],
    ["22-07-17 03:30", 21.3, 993],
    ["22-07-17 03:15", 21.4, 993],
    ["22-07-17 03:00", 21.4, 993],
    ["22-07-17 02:45", 21.4, 993],
    ["22-07-17 02:30", 21.6, 993],
    ["22-07-17 02:15", 21.8, 993],
    ["22-07-17 02:00", 21.9, 993],
    ["22-07-17 01:45", 22.1, 993],
    ["22-07-17 01:30", 22.2, 992],
    ["22-07-17 01:15", 22.5, 992],
    ["22-07-17 01:00", 22.9, 992],
    ["22-07-17 00:45", 23.1, 992],
    ["22-07-17 00:30", 23.7, 992],
    ["22-07-17 00:15", 23.9, 992],
    ["22-07-17 00:00", 24.6, 992],
    ["22-07-16 23:45", 25.0, 992],
    ["22-07-16 23:30", 24.8, 992],
    ["22-07-16 23:15", 24.7, 992],
    ["22-07-16 23:00", 24.7, 991],
    ["22-07-16 22:45", 25.0, 991],
    ["22-07-16 22:30", 25.0, 991],
    ["22-07-16 22:15", 25.1, 991],
    ["22-07-16 22:00", 25.3, 991],
    ["22-07-16 21:45", 25.5, 990],
    ["22-07-16 21:30", 25.2, 990],
    ["22-07-16 21:15", 25.0, 990],
    ["22-07-16 21:00", 24.5, 990],
    ["22-07-16 20:45", 24.5, 989],
    ["22-07-16 20:30", 24.0, 989],
    ["22-07-16 20:15", 23.2, 989],
    ["22-07-16 20:00", 23.3, 989],
    ["22-07-16 19:45", 23.8, 989],
    ["22-07-16 19:30", 23.9, 989],
    ["22-07-16 19:15", 24.4, 989],
    ["22-07-16 19:00", 25.0, 988],
    ["22-07-16 18:45", 25.2, 988],
    ["22-07-16 18:30", 24.9, 988],
    ["22-07-16 18:15", 24.6, 988],
    ["22-07-16 18:00", 24.2, 988],
    ["22-07-16 17:45", 23.7, 988],
    ["22-07-16 17:30", 22.9, 988],
    ["22-07-16 17:15", 22.1, 988],
    ["22-07-16 17:00", 22.0, 988],
    ["22-07-16 16:45", 22.4, 988],
    ["22-07-16 16:30", 22.2, 988],
    ["22-07-16 16:15", 23.1, 988],
    ["22-07-16 16:00", 22.3, 988],
    ["22-07-16 15:45", 22.7, 988],
    ["22-07-16 15:30", 22.2, 988],
    ["22-07-16 15:15", 22.6, 988],
    ["22-07-16 15:00", 22.3, 988],
    ["22-07-16 14:45", 22.3, 988],
    ["22-07-16 14:30", 22.2, 988],
    ["22-07-16 14:15", 22.5, 988],
    ["22-07-16 14:00", 22.9, 988],
    ["22-07-16 13:45", 22.4, 987],
    ["22-07-16 13:30", 21.5, 988],
    ["22-07-16 13:15", 21.4, 988],
    ["22-07-16 13:00", 21.5, 987],
    ["22-07-16 12:45", 21.4, 987],
    ["22-07-16 12:30", 21.5, 987],
    ["22-07-16 12:15", 21.5, 987],
    ["22-07-16 12:00", 21.5, 987],
    ["22-07-16 11:45", 21.2, 987],
    ["22-07-16 11:30", 20.1, 987],
    ["22-07-16 11:15", 20.3, 987],
    ["22-07-16 11:00", 21.6, 986],
    ["22-07-16 10:45", 20.5, 987],
    ["22-07-16 10:30", 21.6, 987],
    ["22-07-16 10:15", 21.6, 986],
    ["22-07-16 10:00", 21.7, 986],
    ["22-07-16 09:45", 21.7, 987],
    ["22-07-16 09:30", 21.7, 987],
    ["22-07-16 09:15", 21.8, 987],
    ["22-07-16 09:00", 21.9, 986],
    ["22-07-16 08:45", 21.8, 986],
    ["22-07-16 08:30", 21.5, 986],
    ["22-07-16 08:15", 21.2, 986],
    ["22-07-16 08:00", 21.2, 986],
    ["22-07-16 07:45", 21.1, 986],
    ["22-07-16 07:30", 21.1, 986],
    ["22-07-16 07:15", 21.2, 986],
    ["22-07-16 07:00", 21.3, 986],
    ["22-07-16 06:45", 21.3, 986],
    ["22-07-16 06:30", 21.1, 986],
    ["22-07-16 06:15", 21.0, 986],
    ["22-07-16 06:00", 20.9, 986],
    ["22-07-16 05:45", 20.9, 986],
    ["22-07-16 05:30", 20.9, 986],
    ["22-07-16 05:15", 21.0, 986],
    ["22-07-16 05:00", 21.0, 986],
    ["22-07-16 04:45", 21.1, 986],
    ["22-07-16 04:30", 21.2, 986],
    ["22-07-16 04:15", 21.3, 987],
    ["22-07-16 04:00", 21.5, 987],
    ["22-07-16 03:45", 21.5, 987],
    ["22-07-16 03:30", 21.5, 987],
    ["22-07-16 03:15", 21.6, 987],
    ["22-07-16 03:00", 21.7, 987],
    ["22-07-16 02:45", 21.9, 987],
    ["22-07-16 02:30", 21.9, 987],
    ["22-07-16 02:15", 22.0, 987],
    ["22-07-16 02:00", 22.2, 987],
    ["22-07-16 01:45", 22.3, 987],
    ["22-07-16 01:30", 22.4, 987],
    ["22-07-16 01:15", 22.6, 987],
    ["22-07-16 01:00", 22.9, 987],
    ["22-07-16 00:45", 23.0, 987],
    ["22-07-16 00:30", 23.3, 987],
    ["22-07-16 00:15", 23.6, 987],
    ["22-07-16 00:00", 23.9, 987],
    ["22-07-15 23:45", 24.3, 987],
    ["22-07-15 23:30", 24.9, 987],
    ["22-07-15 23:15", 24.9, 987],
    ["22-07-15 23:00", 24.8, 987],
    ["22-07-15 22:45", 25.1, 987],
    ["22-07-15 22:30", 25.0, 987],
    ["22-07-15 22:15", 25.3, 987],
    ["22-07-15 22:00", 25.3, 987],
    ["22-07-15 21:45", 25.0, 987],
    ["22-07-15 21:30", 24.3, 987],
    ["22-07-15 21:15", 24.5, 987],
    ["22-07-15 21:00", 24.3, 986],
    ["22-07-15 20:45", 23.7, 987],
    ["22-07-15 20:30", 23.9, 986],
    ["22-07-15 20:15", 24.1, 986],
    ["22-07-15 20:00", 24.2, 986],
    ["22-07-15 19:45", 24.0, 987],
    ["22-07-15 19:30", 24.0, 986],
    ["22-07-15 19:15", 24.4, 986],
    ["22-07-15 19:00", 24.8, 986],
    ["22-07-15 18:45", 25.1, 986],
    ["22-07-15 18:00", 24.5, 986],
    ["22-07-15 17:45", 24.5, 986],
    ["22-07-15 17:30", 24.4, 986],
    ["22-07-15 17:15", 24.0, 986],
    ["22-07-15 17:00", 23.6, 986],
    ["22-07-15 16:45", 23.6, 987],
    ["22-07-15 16:30", 23.9, 986],
    ["22-07-15 16:15", 24.4, 987],
    ["22-07-15 16:00", 24.4, 987],
    ["22-07-15 15:45", 24.3, 986],
    ["22-07-15 15:30", 24.4, 987],
    ["22-07-15 15:15", 24.5, 987],
    ["22-07-15 15:00", 24.5, 987],
    ["22-07-15 14:45", 24.7, 987],
    ["22-07-15 14:30", 24.7, 987],
    ["22-07-15 14:15", 24.7, 987],
    ["22-07-15 14:00", 24.7, 987],
    ["22-07-15 13:45", 24.7, 987],
    ["22-07-15 13:30", 24.6, 987],
    ["22-07-15 13:15", 24.7, 987],
    ["22-07-15 13:00", 24.7, 987],
    ["22-07-15 12:45", 24.7, 987],
    ["22-07-15 12:30", 24.6, 987],
    ["22-07-15 12:15", 24.4, 988],
    ["22-07-15 12:00", 24.3, 988],
    ["22-07-15 11:45", 24.4, 988],
    ["22-07-15 11:30", 24.5, 988],
    ["22-07-15 11:15", 24.5, 988],
    ["22-07-15 11:00", 24.1, 988],
    ["22-07-15 10:45", 24.0, 988],
    ["22-07-15 10:30", 24.3, 988],
    ["22-07-15 10:15", 24.1, 988],
    ["22-07-15 10:00", 24.2, 988],
    ["22-07-15 09:45", 23.9, 988],
    ["22-07-15 09:30", 24.2, 988],
    ["22-07-15 09:15", 23.9, 988],
    ["22-07-15 09:00", 23.4, 988],
    ["22-07-15 08:45", 23.2, 988],
    ["22-07-15 08:30", 23.5, 987],
    ["22-07-15 08:15", 23.2, 987],
    ["22-07-15 08:00", 23.2, 987],
    ["22-07-15 07:45", 22.3, 987],
    ["22-07-15 07:30", 22.1, 987],
    ["22-07-15 07:15", 22.2, 987],
    ["22-07-15 07:00", 22.1, 987],
    ["22-07-15 06:45", 22.1, 987],
    ["22-07-15 06:30", 22.1, 987],
    ["22-07-15 06:15", 22.1, 987],
    ["22-07-15 06:00", 22.2, 987],
    ["22-07-15 05:45", 22.2, 987],
    ["22-07-15 05:30", 22.2, 986],
    ["22-07-15 05:15", 22.2, 986],
    ["22-07-15 05:00", 22.2, 986],
    ["22-07-15 04:45", 22.4, 986],
    ["22-07-15 04:30", 22.4, 986],
    ["22-07-15 04:15", 22.5, 986],
    ["22-07-15 04:00", 22.5, 986],
    ["22-07-15 03:45", 22.5, 986],
    ["22-07-15 03:30", 22.6, 986],
    ["22-07-15 03:15", 22.6, 986],
    ["22-07-15 03:00", 22.7, 986],
    ["22-07-15 02:45", 22.7, 986],
    ["22-07-15 02:30", 22.7, 986],
    ["22-07-15 02:15", 22.7, 986],
    ["22-07-15 02:00", 22.8, 986],
    ["22-07-15 01:45", 22.9, 986],
    ["22-07-15 01:30", 22.9, 986],
    ["22-07-15 01:15", 22.9, 986],
    ["22-07-15 01:00", 22.9, 986],
    ["22-07-15 00:45", 23.0, 986],
    ["22-07-15 00:30", 22.9, 986],
    ["22-07-15 00:15", 23.1, 986],
    ["22-07-15 00:00", 22.9, 985],
    ["22-07-14 23:45", 23.3, 985],
    ["22-07-14 23:30", 23.3, 985],
    ["22-07-14 23:15", 23.4, 985],
    ["22-07-14 23:00", 23.6, 985],
    ["22-07-14 22:45", 23.7, 985],
    ["22-07-14 22:30", 23.8, 985],
    ["22-07-14 22:15", 24.3, 984],
    ["22-07-14 22:00", 24.4, 984],
    ["22-07-14 21:45", 24.4, 984],
    ["22-07-14 21:30", 24.3, 984],
    ["22-07-14 21:15", 24.3, 984],
    ["22-07-14 21:00", 24.3, 983],
    ["22-07-14 20:45", 24.3, 983],
    ["22-07-14 20:30", 24.3, 982],
    ["22-07-14 20:15", 24.1, 982],
    ["22-07-14 20:00", 24.0, 982],
    ["22-07-14 19:45", 24.3, 982],
    ["22-07-14 19:30", 24.3, 982],
    ["22-07-14 19:15", 24.2, 981],
    ["22-07-14 19:00", 24.3, 981],
    ["22-07-14 18:45", 24.2, 981],
    ["22-07-14 18:30", 24.4, 982],
    ["22-07-14 18:15", 24.2, 981],
    ["22-07-14 18:00", 23.8, 982],
    ["22-07-14 17:45", 23.8, 982],
    ["22-07-14 17:30", 23.8, 982],
    ["22-07-14 17:15", 23.9, 982],
    ["22-07-14 17:00", 23.8, 982],
    ["22-07-14 16:45", 23.8, 983],
    ["22-07-14 16:30", 23.8, 982],
    ["22-07-14 16:15", 24.1, 982],
    ["22-07-14 16:00", 24.3, 982],
    ["22-07-14 15:45", 24.3, 982],
    ["22-07-14 15:30", 24.3, 982],
    ["22-07-14 15:15", 24.3, 982],
    ["22-07-14 15:00", 24.1, 982],
    ["22-07-14 14:45", 24.3, 982],
    ["22-07-14 14:30", 24.2, 982],
    ["22-07-14 14:15", 24.2, 982],
    ["22-07-14 14:00", 24.2, 982],
    ["22-07-14 13:45", 24.2, 983],
    ["22-07-14 13:30", 24.2, 983],
    ["22-07-14 13:15", 24.2, 983],
    ["22-07-14 13:00", 24.2, 983],
    ["22-07-14 12:45", 24.0, 984],
    ["22-07-14 12:30", 23.8, 983],
    ["22-07-14 12:15", 23.8, 984],
    ["22-07-14 12:00", 23.5, 984],
    ["22-07-14 11:45", 23.6, 984],
    ["22-07-14 11:30", 23.6, 984],
    ["22-07-14 11:15", 23.5, 984],
    ["22-07-14 11:00", 23.4, 984],
    ["22-07-14 10:45", 23.6, 984],
    ["22-07-14 10:30", 23.1, 984],
    ["22-07-14 10:15", 23.3, 985],
    ["22-07-14 10:00", 23.3, 985],
    ["22-07-14 09:45", 23.3, 985],
    ["22-07-14 09:30", 23.4, 985],
    ["22-07-14 09:15", 23.3, 985],
    ["22-07-14 09:00", 23.4, 985],
    ["22-07-14 08:45", 23.1, 985],
    ["22-07-14 08:30", 23.4, 985],
    ["22-07-14 08:15", 23.3, 985],
    ["22-07-14 08:00", 23.3, 985],
    ["22-07-14 07:45", 23.4, 986],
    ["22-07-14 07:30", 23.4, 986],
    ["22-07-14 07:15", 23.5, 986],
    ["22-07-14 07:00", 23.3, 986],
    ["22-07-14 06:45", 23.3, 985],
    ["22-07-14 06:30", 23.6, 985],
    ["22-07-14 06:15", 23.5, 986],
    ["22-07-14 06:00", 23.4, 985],
    ["22-07-14 05:45", 23.4, 985],
    ["22-07-14 05:30", 23.5, 985],
    ["22-07-14 05:15", 23.5, 985],
    ["22-07-14 05:00", 23.7, 985],
    ["22-07-14 04:45", 23.8, 985],
    ["22-07-14 04:30", 23.8, 985],
    ["22-07-14 04:15", 23.9, 985],
    ["22-07-14 04:00", 24.0, 985],
    ["22-07-14 03:45", 24.2, 985],
    ["22-07-14 03:30", 24.2, 985],
    ["22-07-14 03:15", 24.2, 985],
    ["22-07-14 03:00", 24.1, 985],
    ["22-07-14 02:45", 24.4, 985],
    ["22-07-14 02:30", 24.5, 985],
    ["22-07-14 02:15", 24.7, 985],
    ["22-07-14 02:00", 24.9, 985],
    ["22-07-14 01:45", 24.8, 985],
    ["22-07-14 01:30", 25.0, 985],
    ["22-07-14 01:15", 25.1, 985],
    ["22-07-14 01:00", 25.2, 985],
    ["22-07-14 00:45", 25.4, 985],
    ["22-07-14 00:30", 25.5, 985],
    ["22-07-14 00:15", 25.7, 985],
    ["22-07-14 00:00", 25.9, 985],
    ["22-07-13 23:45", 26.1, 985],
    ["22-07-13 23:30", 26.7, 985],
    ["22-07-13 23:15", 26.7, 985],
    ["22-07-13 23:00", 26.3, 985],
    ["22-07-13 22:45", 25.9, 985],
    ["22-07-13 22:30", 25.5, 985],
    ["22-07-13 22:15", 25.5, 985],
    ["22-07-13 22:00", 25.5, 985],
    ["22-07-13 21:45", 25.5, 985],
    ["22-07-13 21:30", 25.4, 985],
    ["22-07-13 21:15", 25.5, 985],
    ["22-07-13 21:00", 25.7, 984],
    ["22-07-13 20:45", 25.7, 985],
    ["22-07-13 20:30", 25.2, 985],
    ["22-07-13 20:15", 25.3, 985],
    ["22-07-13 20:00", 25.2, 985],
    ["22-07-13 19:45", 25.7, 985],
    ["22-07-13 19:30", 25.8, 984],
    ["22-07-13 19:15", 26.0, 984],
    ["22-07-13 19:00", 26.1, 985],
    ["22-07-13 18:45", 25.9, 984],
    ["22-07-13 18:30", 25.9, 984],
    ["22-07-13 18:15", 26.0, 985],
    ["22-07-13 18:00", 25.8, 985],
    ["22-07-13 17:45", 26.1, 985],
    ["22-07-13 17:30", 25.7, 985],
    ["22-07-13 17:15", 25.1, 985],
    ["22-07-13 17:00", 25.2, 985],
    ["22-07-13 16:45", 25.3, 985],
    ["22-07-13 16:30", 25.5, 985],
    ["22-07-13 16:15", 25.5, 985],
    ["22-07-13 16:00", 25.3, 985],
    ["22-07-13 15:45", 25.5, 985],
    ["22-07-13 15:30", 25.5, 985],
    ["22-07-13 15:15", 25.4, 986],
    ["22-07-13 15:00", 25.5, 985],
    ["22-07-13 14:45", 25.4, 986],
    ["22-07-13 14:30", 25.2, 986],
    ["22-07-13 14:15", 25.1, 986],
    ["22-07-13 14:00", 25.1, 986],
    ["22-07-13 13:45", 24.9, 986],
    ["22-07-13 13:30", 24.9, 986],
    ["22-07-13 13:15", 24.9, 986],
    ["22-07-13 13:00", 24.8, 987],
    ["22-07-13 12:45", 24.7, 987],
    ["22-07-13 12:30", 24.8, 987],
    ["22-07-13 12:15", 25.0, 987],
    ["22-07-13 12:00", 25.1, 987],
    ["22-07-13 11:45", 25.2, 987],
    ["22-07-13 11:30", 25.4, 987],
    ["22-07-13 11:15", 24.4, 987],
    ["22-07-13 11:00", 24.6, 987],
    ["22-07-13 10:45", 24.5, 987],
    ["22-07-13 10:30", 24.1, 987],
    ["22-07-13 10:15", 24.6, 987],
    ["22-07-13 10:00", 24.8, 987],
    ["22-07-13 08:00", 22.1, 988],
    ["22-07-13 07:45", 22.0, 988],
    ["22-07-12 18:00", 24.1, 989],
    ["22-07-12 17:45", 23.8, 989],
    ["22-07-12 17:30", 24.2, 989],
    ["22-07-12 17:15", 24.2, 989],
    ["22-07-12 17:00", 23.9, 988],
    ["22-07-12 16:45", 24.0, 989],
    ["22-07-12 16:30", 23.7, 990],
    ["22-07-12 16:15", 23.6, 989],
    ["22-07-12 16:00", 23.7, 990],
    ["22-07-12 15:45", 23.9, 989],
    ["22-07-12 15:30", 23.9, 990],
    ["22-07-12 15:15", 23.8, 990],
    ["22-07-12 15:00", 23.7, 990],
    ["22-07-12 14:45", 23.7, 990],
    ["22-07-12 14:30", 23.6, 990],
    ["22-07-12 14:15", 23.5, 990],
    ["22-07-12 14:00", 23.4, 990],
    ["22-07-12 13:45", 23.5, 990],
    ["22-07-12 13:30", 23.5, 990],
    ["22-07-12 13:15", 23.7, 990],
    ["22-07-12 13:00", 23.6, 990],
    ["22-07-12 12:45", 23.6, 990],
    ["22-07-12 12:30", 23.5, 990],
    ["22-07-12 12:15", 23.8, 990],
    ["22-07-12 12:00", 23.6, 991],
    ["22-07-12 11:45", 24.0, 990],
    ["22-07-12 11:30", 23.8, 990],
    ["22-07-12 11:15", 23.9, 991],
    ["22-07-12 11:00", 23.5, 990],
    ["22-07-12 10:45", 23.9, 990],
    ["22-07-12 10:30", 23.8, 991],
    ["22-07-12 10:15", 23.5, 991],
    ["22-07-12 10:00", 23.2, 990],
    ["22-07-12 09:45", 22.9, 991],
    ["22-07-12 09:30", 23.0, 991],
    ["22-07-12 09:15", 22.4, 991],
    ["22-07-12 09:00", 22.0, 991],
    ["22-07-12 08:45", 21.9, 991],
    ["22-07-12 08:30", 21.5, 990],
    ["22-07-12 08:15", 21.4, 990],
    ["22-07-12 08:00", 21.6, 990],
    ["22-07-12 07:45", 21.9, 990],
    ["22-07-12 07:30", 21.1, 990],
    ["22-07-12 07:15", 21.2, 990],
    ["22-07-12 07:00", 21.1, 990],
    ["22-07-12 06:45", 21.1, 990],
    ["22-07-12 06:30", 20.8, 989],
    ["22-07-12 06:15", 21.0, 990],
    ["22-07-12 06:00", 21.0, 990],
    ["22-07-12 05:45", 20.9, 990],
    ["22-07-12 05:30", 21.1, 990],
    ["22-07-12 05:15", 20.8, 989],
    ["22-07-12 05:00", 21.0, 989],
    ["22-07-12 04:45", 21.0, 989],
    ["22-07-12 04:30", 21.1, 989],
    ["22-07-12 04:15", 21.2, 989],
    ["22-07-12 04:00", 21.0, 989],
    ["22-07-12 03:45", 21.5, 989],
    ["22-07-12 03:30", 21.4, 989],
    ["22-07-12 03:15", 21.6, 989],
    ["22-07-12 03:00", 21.6, 989],
    ["22-07-12 02:45", 21.7, 989],
    ["22-07-12 02:30", 21.9, 989],
    ["22-07-12 02:15", 21.9, 990],
    ["22-07-12 02:00", 21.8, 989],
    ["22-07-12 01:45", 22.0, 989],
    ["22-07-12 01:30", 22.0, 989],
    ["22-07-12 01:15", 22.1, 989],
    ["22-07-12 01:00", 22.1, 989],
    ["22-07-12 00:45", 22.1, 989],
    ["22-07-12 00:30", 22.1, 989],
    ["22-07-12 00:15", 22.4, 989],
    ["22-07-12 00:00", 22.4, 989],
    ["22-07-11 23:45", 22.5, 989],
    ["22-07-11 23:30", 22.6, 989],
    ["22-07-11 23:15", 22.6, 989],
    ["22-07-11 23:00", 22.7, 989],
    ["22-07-11 22:45", 23.0, 989],
    ["22-07-11 22:30", 23.1, 989],
    ["22-07-11 22:15", 23.1, 989],
    ["22-07-11 22:00", 23.2, 989],
    ["22-07-11 21:45", 22.9, 989],
    ["22-07-11 21:30", 22.9, 988],
    ["22-07-11 21:15", 23.0, 988],
    ["22-07-11 21:00", 23.0, 988],
    ["22-07-11 20:45", 23.1, 988],
    ["22-07-11 20:30", 23.1, 988],
    ["22-07-11 20:15", 23.0, 988],
    ["22-07-11 20:00", 22.6, 987],
    ["22-07-11 19:45", 22.7, 987],
    ["22-07-11 19:30", 22.6, 987],
    ["22-07-11 19:15", 23.1, 988],
    ["22-07-11 19:00", 23.1, 988],
    ["22-07-11 18:45", 23.2, 987],
    ["22-07-11 18:30", 23.2, 987],
    ["22-07-11 18:15", 22.8, 987],
    ["22-07-11 18:00", 23.0, 987],
    ["22-07-11 17:45", 23.4, 987],
    ["22-07-11 17:30", 23.3, 988],
    ["22-07-11 17:15", 23.1, 988],
    ["22-07-11 17:00", 23.2, 987],
    ["22-07-11 16:45", 23.1, 987],
    ["22-07-11 16:30", 22.8, 988],
    ["22-07-11 16:15", 23.0, 987],
    ["22-07-11 16:00", 23.1, 987],
    ["22-07-11 15:45", 23.3, 987],
    ["22-07-11 15:30", 23.1, 987],
    ["22-07-11 15:15", 22.9, 987],
    ["22-07-11 15:00", 23.0, 987],
    ["22-07-11 14:45", 22.5, 987],
    ["22-07-11 14:30", 22.8, 988],
    ["22-07-11 14:15", 22.8, 987],
    ["22-07-11 14:00", 23.2, 988],
    ["22-07-11 13:45", 23.1, 988],
    ["22-07-11 13:30", 23.2, 988],
    ["22-07-11 13:15", 23.1, 988],
    ["22-07-11 13:00", 23.2, 988],
    ["22-07-11 12:45", 23.1, 988],
    ["22-07-11 12:30", 23.1, 988],
    ["22-07-11 12:15", 23.1, 988],
    ["22-07-11 12:00", 23.1, 988],
    ["22-07-11 11:45", 23.2, 988],
    ["22-07-11 11:30", 22.8, 988],
    ["22-07-11 11:15", 23.0, 988],
    ["22-07-11 11:00", 23.1, 988],
    ["22-07-11 10:45", 23.1, 988],
    ["22-07-11 10:30", 22.7, 988],
    ["22-07-11 10:15", 22.6, 988],
    ["22-07-11 10:00", 22.4, 988],
    ["22-07-11 09:45", 22.5, 988],
    ["22-07-11 09:30", 22.4, 988],
    ["22-07-11 09:15", 22.6, 988],
    ["22-07-11 09:00", 22.5, 988],
    ["22-07-11 08:45", 22.0, 988],
    ["22-07-11 08:30", 21.8, 988],
    ["22-07-11 08:15", 21.7, 988],
    ["22-07-11 08:00", 21.1, 988],
    ["22-07-11 07:45", 21.4, 988],
    ["22-07-11 07:30", 21.3, 988],
    ["22-07-11 07:15", 21.2, 987],
    ["22-07-11 07:00", 21.1, 988],
    ["22-07-11 06:45", 21.3, 987],
    ["22-07-11 06:30", 21.2, 988],
    ["22-07-11 06:15", 21.3, 987],
    ["22-07-11 06:00", 21.4, 988],
    ["22-07-11 05:45", 21.3, 987],
    ["22-07-11 05:30", 21.4, 987],
    ["22-07-11 05:15", 21.5, 988],
    ["22-07-11 05:00", 21.6, 987],
    ["22-07-11 04:45", 21.5, 987],
    ["22-07-11 04:30", 21.6, 987],
    ["22-07-11 04:15", 21.6, 987],
    ["22-07-11 04:00", 21.6, 988],
    ["22-07-11 03:45", 21.7, 988],
    ["22-07-11 03:30", 21.7, 988],
    ["22-07-11 03:15", 21.7, 988],
    ["22-07-11 03:00", 21.9, 988],
    ["22-07-11 02:45", 22.0, 988],
    ["22-07-11 02:30", 22.0, 988],
    ["22-07-11 02:15", 22.2, 988],
    ["22-07-11 02:00", 22.2, 988],
    ["22-07-11 01:45", 22.3, 988],
    ["22-07-11 01:30", 22.3, 988],
    ["22-07-11 01:15", 22.4, 988],
    ["22-07-11 01:00", 22.4, 988],
    ["22-07-11 00:45", 22.5, 988],
    ["22-07-11 00:30", 22.5, 988],
    ["22-07-11 00:15", 22.7, 988],
    ["22-07-11 00:00", 23.1, 988],
    ["22-07-10 23:45", 23.2, 988],
    ["22-07-10 23:30", 23.4, 988],
    ["22-07-10 23:15", 23.6, 988],
    ["22-07-10 23:00", 23.9, 988],
    ["22-07-10 22:45", 24.6, 988],
    ["22-07-10 22:30", 25.3, 988],
    ["22-07-10 22:15", 25.2, 988],
    ["22-07-10 22:00", 24.8, 988],
    ["22-07-10 21:45", 23.6, 988],
    ["22-07-10 21:30", 24.3, 988],
    ["22-07-10 21:15", 23.1, 988],
    ["22-07-10 21:00", 23.6, 988],
    ["22-07-10 20:45", 24.2, 987],
    ["22-07-10 20:30", 24.3, 988],
    ["22-07-10 20:15", 24.6, 987],
    ["22-07-10 20:00", 24.6, 987],
    ["22-07-10 19:45", 25.2, 987],
    ["22-07-10 19:30", 25.8, 987],
    ["22-07-10 19:00", 26.9, 987],
    ["22-07-10 18:45", 26.6, 987],
    ["22-07-10 18:30", 26.1, 987],
    ["22-07-10 18:15", 25.7, 987],
    ["22-07-10 18:00", 25.1, 987],
    ["22-07-10 17:45", 24.2, 987],
    ["22-07-10 17:30", 23.5, 987],
    ["22-07-10 17:15", 24.2, 987],
    ["22-07-10 17:00", 24.3, 987],
    ["22-07-10 16:45", 24.4, 987],
    ["22-07-10 16:30", 24.7, 987],
    ["22-07-10 16:15", 24.7, 987],
    ["22-07-10 16:00", 24.9, 987],
    ["22-07-10 15:45", 25.0, 988],
    ["22-07-10 15:30", 25.1, 988],
    ["22-07-10 15:15", 25.2, 987],
    ["22-07-10 15:00", 25.1, 988],
    ["22-07-10 14:45", 25.5, 988],
    ["22-07-10 14:30", 25.6, 988],
    ["22-07-10 14:15", 25.5, 988],
    ["22-07-10 14:00", 25.2, 988],
    ["22-07-10 13:45", 25.5, 988],
    ["22-07-10 13:30", 26.5, 988],
    ["22-07-10 13:15", 26.1, 988],
    ["22-07-10 13:00", 25.7, 988],
    ["22-07-10 12:45", 25.4, 988],
    ["22-07-10 12:30", 24.7, 988],
    ["22-07-10 12:15", 23.9, 989],
    ["22-07-10 12:12", 24.7, 989],
    ["22-07-10 12:08", 23.9, 988],
    ["22-07-10 12:00", 23.8, 989],
    ["22-07-10 11:45", 23.6, 989],
    ["22-07-10 11:30", 23.0, 989],
    ["22-07-10 11:15", 22.8, 989],
    ["22-07-10 11:00", 22.8, 989],
    ["22-07-10 10:30", 23.0, 988],
    ["22-07-10 10:15", 23.2, 988],
    ["22-07-10 10:00", 23.8, 988],
    ["22-07-10 09:45", 23.5, 988],
    ["22-07-10 09:30", 22.7, 988],
    ["22-07-10 09:15", 22.3, 988],
    ["22-07-10 09:00", 21.9, 988],
    ["22-07-10 08:45", 22.1, 988],
    ["22-07-10 08:30", 21.9, 988],
    ["22-07-10 08:15", 21.5, 988],
];
