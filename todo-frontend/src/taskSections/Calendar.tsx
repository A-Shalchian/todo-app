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

export const Calendar = () => {
  const plugins = [
    createEventsServicePlugin(),
    createEventModalPlugin(),
    createDragAndDropPlugin(),
  ];

  const calendar = useNextCalendarApp(
    {
      views: [createViewDay(), createViewWeek()],
      events: [
        {
          id: "1",
          title: "Event 1",
          start: "2025-02-18 10:05",
          end: "2025-02-18 11:05",
          description: "Event 1 description",
        },
        {
          id: "2",
          title: "Event 2",
          start: "2025-02-19 11:05",
          end: "2025-02-19 14:05",
          description: "Event 2 description",
        },
      ],
      selectedDate: "2025-02-18",
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
