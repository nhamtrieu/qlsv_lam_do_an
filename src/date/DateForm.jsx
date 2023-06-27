import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

export default function DateForm() {
    const [value, setValue] = (React.useState < Dayjs) | (null > dayjs());

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateCalendar", "DateCalendar"]}>
                <DemoItem label="Uncontrolled calendar">
                    <DateCalendar defaultValue={dayjs(new Date())} />
                </DemoItem>
                <DemoItem label="Controlled calendar">
                    <DateCalendar
                        value={value}
                        onChange={(newValue) => setValue(newValue)}
                    />
                </DemoItem>
            </DemoContainer>
        </LocalizationProvider>
    );
}
