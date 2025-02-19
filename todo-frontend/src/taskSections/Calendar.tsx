"use client";
import { ScheduleXCalendar, useNextCalendarApp } from "@schedule-x/react";
import { createViewDay, createViewWeek } from "@schedule-x/calendar";
import { createEventsServicePlugin } from "@schedule-x/events-service";
import { createDragAndDropPlugin } from "@schedule-x/drag-and-drop";
import { createEventModalPlugin } from "@schedule-x/event-modal";
import "@schedule-x/theme-default/dist/index.css";
import { useEffect } from "react";

type CalendarWithEvents = {
  eventsService: {
    getAll: () => void;
  };
};

interface Task {
  _id: string;
  description: string;
  completed: boolean;
}

interface CalendarProps {
  tasks?: Task[];
}

export const Calendar = ({ tasks = [] }: CalendarProps) => {
  const plugins = [
    createEventsServicePlugin(),
    createEventModalPlugin(),
    createDragAndDropPlugin(),
  ];

  // Convert tasks to calendar events
  const taskEvents = tasks.map((task) => ({
    id: task._id,
    title: task.description,
    start: new Date().toISOString().split("T")[0] + " 09:00", // Default to today 9 AM
    end: new Date().toISOString().split("T")[0] + " 10:00", // Default to 1 hour duration
    description: task.description,
    isTask: true,
    completed: task.completed,
  }));

  const calendar = useNextCalendarApp(
    {
      views: [createViewDay(), createViewWeek()],
      events: [...taskEvents], // Include task events
      selectedDate: new Date().toISOString().split("T")[0], // Set to today
    },
    plugins
  );

  useEffect(() => {
    (calendar as unknown as CalendarWithEvents)?.eventsService.getAll();
  }, [calendar]);

  return (
    <div>
      <ScheduleXCalendar calendarApp={calendar} />
    </div>
  );
};
