export default function AddMeetingSchedule() {
    return (
        <div className="overlay">
            <div className="add-meeting">
                <h1 className="title">Gui yeu cau gap mat voi giang vien</h1>
                <main className="main">
                    <div className="time">
                        <label htmlFor="add-date-meeting">
                            Chon ngay gap mat
                        </label>
                        <input type="date" id="add-date-meeting" />
                    </div>
                </main>
                <Button
                    variant="contained"
                    color="success"
                    className="send-btn"
                >
                    Gui
                </Button>
                <Button variant="outlined" color="error" className="cancel-btn">
                    Huy
                </Button>
            </div>
        </div>
    );
}
