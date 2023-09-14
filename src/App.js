import {
  AppBar,
  Box,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CalendarDay from "./components/CalendarDay";
import MonthSwitcher from "./components/MonthSwitcher";
import daysOfWeek from "./helper/weekdays";
import { getMonthName } from "./helper/months";

import classes from "./App.module.css";

const SCHEDULE = ["Gündüz", "Gece", "İzin", "İzin"];
const TODAY = new Date();

export default function App() {
  const [startDay, setStartDay] = useState("2023-08-28");
  const [month, setMonth] = useState(new Date());
  const [schedule, setSchedule] = useState([]);

  function calculateSchedule(date) {
    const startDate = new Date(startDay);
    const difference = date.getTime() - startDate.getTime();
    const TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    const daysSchedule = SCHEDULE[TotalDays % 4];
    return daysSchedule;
  }

  function nextDay(date) {
    const nextDay = new Date(date);
    nextDay.setDate(nextDay.getDate() + 1);
    return nextDay;
  }

  function changeMonth(increment) {
    const newDate = new Date(month);
    newDate.setDate(newDate.getMonth() + increment);
    setMonth(newDate);
  }

  useEffect(() => {
    const firstDateOfMonth = new Date(month.getFullYear(), month.getMonth(), 1);
    const lastDateOfMonth = new Date(
      month.getFullYear(),
      month.getMonth() + 1,
      0
    );
    const firstDayOfCalendar = new Date(
      month.getFullYear(),
      month.getMonth() + 1,
      1 - lastDateOfMonth.getDay()
    );
    const weekCount = Math.ceil(lastDateOfMonth.getDate() / 7);
    let day = firstDayOfCalendar;
    const monthlySchedule = [];
    for (let week = 0; week < weekCount; week++) {
      const weeklySchedule = [];
      for (let weekday = 0; weekday < 7; weekday++) {
        weeklySchedule.push({ date: day, schedule: calculateSchedule(day) });
        day = nextDay(day);
      }
      monthlySchedule.push(weeklySchedule)
    }
    setSchedule(monthlySchedule);
  }, [month]);

  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {getMonthName(month)}
            </Typography>
            <MonthSwitcher dateChanger={changeMonth} />
          </Toolbar>
        </AppBar>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow className={classes.header}>
              {daysOfWeek.map((day) => (
                <TableCell key={day}>
                  <Typography
                    variant="h6"
                    sx={{ textAlign: "center" }}
                    color="text.secondary"
                  >
                    {day}
                  </Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {schedule.map((week, index) => (
              <TableRow key={index}>
                {week.map((day) => (
                  <TableCell key={day.date} sx={{ padding: "5px" }}>
                    <CalendarDay schedule={day.schedule} date={day.date} />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
