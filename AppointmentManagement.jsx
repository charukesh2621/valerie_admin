import { useMemo, useState } from "react";

function AppointmentManagement({ confirmedAppointments, setConfirmedAppointments }) {
  const [appointmentRequests, setAppointmentRequests] = useState([
    {
      id: 1,
      patientName: "Ramesh Kumar",
      department: "Cardiology",
      preferredDoctor: "Dr. Rohan Mehta",
      issue: "Chest pain and BP fluctuations",
      status: "Pending",
    },
    {
      id: 2,
      patientName: "Sunita Sharma",
      department: "Diabetology",
      preferredDoctor: "Dr. Priya Sharma",
      issue: "Diabetes follow-up",
      status: "Pending",
    },
    {
      id: 3,
      patientName: "Arjun Verma",
      department: "Cardiology",
      preferredDoctor: "Dr. Rohan Mehta",
      issue: "Follow-up after medication update",
      status: "Pending",
    },
  ]);

  const doctorSchedules = [
    {
      doctorName: "Dr. Rohan Mehta",
      hospitals: [
        {
          hospitalName: "City Care Hospital",
          startTime: "10:00 AM",
          endTime: "1:00 PM",
          slots: [
            "10:00 AM",
            "10:30 AM",
            "11:00 AM",
            "11:30 AM",
            "12:00 PM",
            "12:30 PM",
          ],
        },
        {
          hospitalName: "Apollo Health Center",
          startTime: "6:00 PM",
          endTime: "9:00 PM",
          slots: [
            "6:00 PM",
            "6:30 PM",
            "7:00 PM",
            "7:30 PM",
            "8:00 PM",
            "8:30 PM",
          ],
        },
      ],
    },
    {
      doctorName: "Dr. Priya Sharma",
      hospitals: [
        {
          hospitalName: "Sunrise Hospital",
          startTime: "9:00 AM",
          endTime: "12:00 PM",
          slots: [
            "9:00 AM",
            "9:30 AM",
            "10:00 AM",
            "10:30 AM",
            "11:00 AM",
            "11:30 AM",
          ],
        },
        {
          hospitalName: "WellCare Clinic",
          startTime: "5:00 PM",
          endTime: "8:00 PM",
          slots: [
            "5:00 PM",
            "5:30 PM",
            "6:00 PM",
            "6:30 PM",
            "7:00 PM",
            "7:30 PM",
          ],
        },
      ],
    },
  ];

  const [selectedRequest, setSelectedRequest] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedHospital, setSelectedHospital] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");

  const selectedDoctorData = useMemo(() => {
    return doctorSchedules.find((doctor) => doctor.doctorName === selectedDoctor);
  }, [selectedDoctor]);

  const hospitalOptions = selectedDoctorData ? selectedDoctorData.hospitals : [];

  const selectedHospitalData = useMemo(() => {
    return hospitalOptions.find(
      (hospital) => hospital.hospitalName === selectedHospital
    );
  }, [hospitalOptions, selectedHospital]);

  const bookedSlotsForSelected = confirmedAppointments
    .filter(
      (appointment) =>
        appointment.doctorName === selectedDoctor &&
        appointment.hospitalName === selectedHospital &&
        appointment.date === selectedDate
    )
    .map((appointment) => appointment.slot);

  const availableSlots = selectedHospitalData
    ? selectedHospitalData.slots.filter(
        (slot) => !bookedSlotsForSelected.includes(slot)
      )
    : [];

  const handleSelectRequest = (request) => {
    setSelectedRequest(request);
    setSelectedDoctor(request.preferredDoctor);
    setSelectedHospital("");
    setSelectedDate("");
    setSelectedSlot("");
  };

  const handleConfirmAppointment = () => {
    if (!selectedRequest || !selectedDoctor || !selectedHospital || !selectedDate || !selectedSlot) {
      alert("Please select request, doctor, hospital, date, and slot");
      return;
    }

    const newAppointment = {
      id: Date.now(),
      patientName: selectedRequest.patientName,
      doctorName: selectedDoctor,
      hospitalName: selectedHospital,
      date: selectedDate,
      slot: selectedSlot,
      issue: selectedRequest.issue,
    };

    setConfirmedAppointments((prev) => [...prev, newAppointment]);

    setAppointmentRequests((prev) =>
      prev.map((request) =>
        request.id === selectedRequest.id
          ? { ...request, status: "Confirmed" }
          : request
      )
    );

    alert("Appointment confirmed successfully");

    setSelectedRequest(null);
    setSelectedDoctor("");
    setSelectedHospital("");
    setSelectedDate("");
    setSelectedSlot("");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #f8fbff 0%, #f4f7fb 100%)",
        padding: "32px",
      }}
    >
      <div style={{ marginBottom: "28px" }}>
        <p
          style={{
            margin: "0 0 8px 0",
            fontSize: "14px",
            fontWeight: "600",
            color: "#3b82f6",
            letterSpacing: "0.4px",
          }}
        >
          Healthcare Admin Panel
        </p>
        <h1
          style={{
            margin: "0 0 10px 0",
            fontSize: "34px",
            fontWeight: "700",
            color: "#111827",
          }}
        >
          Appointment Management
        </h1>
        <p
          style={{
            margin: 0,
            fontSize: "15px",
            color: "#6b7280",
            maxWidth: "850px",
            lineHeight: "1.7",
          }}
        >
          Manage appointment requests, assign doctors and hospitals, and confirm bookings through a clean scheduling panel.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: "24px",
          alignItems: "start",
        }}
      >
        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "24px",
            borderRadius: "20px",
            boxShadow: "0 12px 32px rgba(15, 23, 42, 0.06)",
            border: "1px solid #e5eef8",
          }}
        >
          <div style={{ marginBottom: "18px" }}>
            <h2
              style={{
                margin: "0 0 6px 0",
                fontSize: "22px",
                fontWeight: "700",
                color: "#111827",
              }}
            >
              Pending Appointment Requests
            </h2>
            <p
              style={{
                margin: 0,
                fontSize: "14px",
                color: "#6b7280",
              }}
            >
              Select a request to start scheduling and booking.
            </p>
          </div>

          <div style={{ display: "grid", gap: "16px" }}>
            {appointmentRequests.map((request) => (
              <div
                key={request.id}
                style={{
                  border: selectedRequest?.id === request.id ? "1px solid #bfdbfe" : "1px solid #e5e7eb",
                  borderRadius: "16px",
                  padding: "18px",
                  backgroundColor:
                    selectedRequest?.id === request.id ? "#eff6ff" : "#ffffff",
                  boxShadow:
                    selectedRequest?.id === request.id
                      ? "0 8px 20px rgba(37, 99, 235, 0.08)"
                      : "none",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "12px",
                    marginBottom: "12px",
                    flexWrap: "wrap",
                  }}
                >
                  <h3
                    style={{
                      margin: 0,
                      fontSize: "18px",
                      fontWeight: "700",
                      color: "#111827",
                    }}
                  >
                    {request.patientName}
                  </h3>

                  <span
                    style={{
                      display: "inline-block",
                      padding: "7px 14px",
                      borderRadius: "999px",
                      backgroundColor:
                        request.status === "Confirmed" ? "#dcfce7" : "#fff7ed",
                      color:
                        request.status === "Confirmed" ? "#15803d" : "#ea580c",
                      fontSize: "13px",
                      fontWeight: "600",
                    }}
                  >
                    {request.status}
                  </span>
                </div>

                <p style={requestTextStyle}>
                  <strong>Department:</strong> {request.department}
                </p>
                <p style={requestTextStyle}>
                  <strong>Preferred Doctor:</strong> {request.preferredDoctor}
                </p>
                <p style={requestTextStyle}>
                  <strong>Issue:</strong> {request.issue}
                </p>

                <button
                  onClick={() => handleSelectRequest(request)}
                  disabled={request.status === "Confirmed"}
                  style={{
                    marginTop: "14px",
                    padding: "11px 16px",
                    border: "none",
                    borderRadius: "10px",
                    cursor: request.status === "Confirmed" ? "not-allowed" : "pointer",
                    background:
                      request.status === "Confirmed"
                        ? "#94a3b8"
                        : "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
                    color: "white",
                    fontSize: "14px",
                    fontWeight: "600",
                    boxShadow:
                      request.status === "Confirmed"
                        ? "none"
                        : "0 8px 18px rgba(37, 99, 235, 0.18)",
                  }}
                >
                  {request.status === "Confirmed" ? "Already Confirmed" : "Manage Request"}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "24px",
            borderRadius: "20px",
            boxShadow: "0 12px 32px rgba(15, 23, 42, 0.06)",
            border: "1px solid #e5eef8",
          }}
        >
          <div style={{ marginBottom: "18px" }}>
            <h2
              style={{
                margin: "0 0 6px 0",
                fontSize: "22px",
                fontWeight: "700",
                color: "#111827",
              }}
            >
              Schedule and Booking Panel
            </h2>
            <p
              style={{
                margin: 0,
                fontSize: "14px",
                color: "#6b7280",
              }}
            >
              Complete the doctor, hospital, date, and slot selection to confirm the appointment.
            </p>
          </div>

          <div style={{ display: "grid", gap: "16px" }}>
            <div>
              <label style={labelStyle}>Selected Patient</label>
              <input
                type="text"
                value={selectedRequest ? selectedRequest.patientName : ""}
                placeholder="Select a request from left side"
                readOnly
                style={inputStyle}
              />
            </div>

            <div>
              <label style={labelStyle}>Doctor</label>
              <select
                value={selectedDoctor}
                onChange={(e) => {
                  setSelectedDoctor(e.target.value);
                  setSelectedHospital("");
                  setSelectedSlot("");
                }}
                style={inputStyle}
              >
                <option value="">Select Doctor</option>
                {doctorSchedules.map((doctor) => (
                  <option key={doctor.doctorName} value={doctor.doctorName}>
                    {doctor.doctorName}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label style={labelStyle}>Hospital</label>
              <select
                value={selectedHospital}
                onChange={(e) => {
                  setSelectedHospital(e.target.value);
                  setSelectedSlot("");
                }}
                style={inputStyle}
              >
                <option value="">Select Hospital</option>
                {hospitalOptions.map((hospital) => (
                  <option key={hospital.hospitalName} value={hospital.hospitalName}>
                    {hospital.hospitalName}
                  </option>
                ))}
              </select>
            </div>

            {selectedHospitalData && (
              <div
                style={{
                  backgroundColor: "#f8fbff",
                  border: "1px solid #dbeafe",
                  borderRadius: "14px",
                  padding: "14px 16px",
                }}
              >
                <p style={{ margin: "0 0 6px 0", color: "#1e3a8a", fontSize: "14px" }}>
                  <strong>Doctor Timing:</strong> {selectedHospitalData.startTime} -{" "}
                  {selectedHospitalData.endTime}
                </p>
                <p style={{ margin: 0, color: "#475569", fontSize: "14px" }}>
                  <strong>Hospital:</strong> {selectedHospitalData.hospitalName}
                </p>
              </div>
            )}

            <div>
              <label style={labelStyle}>Date</label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => {
                  setSelectedDate(e.target.value);
                  setSelectedSlot("");
                }}
                style={inputStyle}
              />
            </div>

            <div>
              <label style={labelStyle}>Available Time Slots</label>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  marginTop: "10px",
                }}
              >
                {availableSlots.length > 0 ? (
                  availableSlots.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => setSelectedSlot(slot)}
                      style={{
                        padding: "10px 14px",
                        borderRadius: "10px",
                        border: selectedSlot === slot ? "1px solid #2563eb" : "1px solid #d1d5db",
                        cursor: "pointer",
                        backgroundColor:
                          selectedSlot === slot ? "#2563eb" : "#ffffff",
                        color: selectedSlot === slot ? "white" : "#111827",
                        fontSize: "14px",
                        fontWeight: "600",
                        boxShadow:
                          selectedSlot === slot
                            ? "0 8px 18px rgba(37, 99, 235, 0.18)"
                            : "none",
                      }}
                    >
                      {slot}
                    </button>
                  ))
                ) : (
                  <p style={{ margin: 0, color: "#64748b", fontSize: "14px" }}>
                    {selectedHospital && selectedDate
                      ? "No slots available for selected date"
                      : "Select doctor, hospital, and date to view slots"}
                  </p>
                )}
              </div>
            </div>

            <button
              onClick={handleConfirmAppointment}
              style={{
                marginTop: "6px",
                padding: "13px",
                border: "none",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
                color: "white",
                fontSize: "15px",
                fontWeight: "600",
                cursor: "pointer",
                boxShadow: "0 10px 20px rgba(22, 163, 74, 0.18)",
              }}
            >
              Confirm Appointment
            </button>
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: "28px",
          backgroundColor: "#ffffff",
          padding: "24px",
          borderRadius: "20px",
          boxShadow: "0 12px 32px rgba(15, 23, 42, 0.06)",
          border: "1px solid #e5eef8",
        }}
      >
        <div style={{ marginBottom: "18px" }}>
          <h2
            style={{
              margin: "0 0 6px 0",
              fontSize: "22px",
              fontWeight: "700",
              color: "#111827",
            }}
          >
            Confirmed Appointments
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: "14px",
              color: "#6b7280",
            }}
          >
            View all appointments that have already been booked.
          </p>
        </div>

        {confirmedAppointments.length === 0 ? (
          <p style={{ color: "#64748b", margin: 0 }}>No appointments confirmed yet.</p>
        ) : (
          <div style={{ display: "grid", gap: "16px" }}>
            {confirmedAppointments.map((appointment) => (
              <div
                key={appointment.id}
                style={{
                  border: "1px solid #e5e7eb",
                  borderRadius: "16px",
                  padding: "18px",
                  backgroundColor: "#f8fafc",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "14px",
                    flexWrap: "wrap",
                    marginBottom: "12px",
                  }}
                >
                  <h3
                    style={{
                      margin: 0,
                      fontSize: "18px",
                      fontWeight: "700",
                      color: "#111827",
                    }}
                  >
                    {appointment.patientName}
                  </h3>

                  <span
                    style={{
                      display: "inline-block",
                      padding: "7px 14px",
                      borderRadius: "999px",
                      backgroundColor: "#dcfce7",
                      color: "#15803d",
                      fontSize: "13px",
                      fontWeight: "600",
                    }}
                  >
                    Confirmed
                  </span>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
                    gap: "12px",
                  }}
                >
                  <div style={detailBoxStyle}>
                    <span style={detailLabelStyle}>Doctor</span>
                    <span style={detailValueStyle}>{appointment.doctorName}</span>
                  </div>
                  <div style={detailBoxStyle}>
                    <span style={detailLabelStyle}>Hospital</span>
                    <span style={detailValueStyle}>{appointment.hospitalName}</span>
                  </div>
                  <div style={detailBoxStyle}>
                    <span style={detailLabelStyle}>Date</span>
                    <span style={detailValueStyle}>{appointment.date}</span>
                  </div>
                  <div style={detailBoxStyle}>
                    <span style={detailLabelStyle}>Slot</span>
                    <span style={detailValueStyle}>{appointment.slot}</span>
                  </div>
                  <div style={detailBoxStyle}>
                    <span style={detailLabelStyle}>Issue</span>
                    <span style={detailValueStyle}>{appointment.issue}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const labelStyle = {
  display: "block",
  marginBottom: "8px",
  fontSize: "14px",
  color: "#334155",
  fontWeight: "600",
};

const inputStyle = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: "12px",
  border: "1px solid #cbd5e1",
  outline: "none",
  fontSize: "14px",
  boxSizing: "border-box",
  backgroundColor: "#ffffff",
  color: "#111827",
};

const requestTextStyle = {
  margin: "4px 0",
  fontSize: "14px",
  color: "#475569",
};

const detailBoxStyle = {
  backgroundColor: "#ffffff",
  border: "1px solid #e5e7eb",
  borderRadius: "14px",
  padding: "12px 14px",
  display: "flex",
  flexDirection: "column",
  gap: "6px",
};

const detailLabelStyle = {
  fontSize: "12px",
  fontWeight: "600",
  color: "#64748b",
  textTransform: "uppercase",
  letterSpacing: "0.3px",
};

const detailValueStyle = {
  fontSize: "14px",
  fontWeight: "600",
  color: "#111827",
};

export default AppointmentManagement;