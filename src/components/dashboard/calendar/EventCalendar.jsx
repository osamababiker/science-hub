import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const events = [
  { title: "درس اساسيات البرمجة", start: new Date() },
];

function renderEventContent(eventInfo) {
  return (
    <>
      <div
        className="text-left pt-5 pb-15 px-10"
        style={{ overflow: "hidden" }}
      >
        <div className={"mt-5"}>
          <div className={`text-14 dot-left ml-5 `}>{eventInfo.timeText}</div>
          <div className="text-14 text-dark-1 break-content">
            {eventInfo.event.title}
          </div>
        </div>
      </div>
    </>
  );
}

export default function EventCalendar() {
  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventContent={renderEventContent}
      />
    </div>
  );
}
