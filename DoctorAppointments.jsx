import { useEffect, useState } from "react";

function DoctorAppointments({ doctorName, confirmedAppointments, doctorHospitals }) {
  const [doctorAppointments, setDoctorAppointments] = useState([]);

  useEffect(() => {
    const staticAppointments = [
      {
        id: 1,
        doctorName: doctorName || "Dr. Rohan Mehta",
        date: "2026-04-15",
        slot: "10:00 AM",
        patientName: "Ramesh Kumar",
        hospitalName: "City Care Hospital",
        issue: "Chest pain",
        status: "Scheduled",
      },
      {
        id: 2,
        doctorName: doctorName || "Dr. Rohan Mehta",
        date: "2026-04-15",
        slot: "10:30 AM",
        patientName: "Sunita Sharma",
        hospitalName: "City Care Hospital",
        issue: "Diabetes follow-up",
        status: "Scheduled",
      },
      {
        id: 3,
        doctorName: doctorName || "Dr. Rohan Mehta",
        date: "2026-04-16",
        slot: "11:00 AM",
        patientName: "Arjun Verma",
        hospitalName: "Apollo Health Center",
        issue: "Heart checkup",
        status: "Scheduled",
      },
      {
        id: 4,
        doctorName: doctorName || "Dr. Rohan Mehta",
        date: "2026-04-14",
        slot: "6:00 PM",
        patientName: "Priya Nair",
        hospitalName: "Apollo Health Center",
        issue: "Asthma",
        status: "Completed",
      },
      {
        id: 5,
        doctorName: doctorName || "Dr. Rohan Mehta",
        date: "2026-04-14",
        slot: "6:30 PM",
        patientName: "Rahul Singh",
        hospitalName: "Apollo Health Center",
        issue: "BP issue",
        status: "Missed",
      },
      {
        id: 6,
        doctorName: doctorName || "Dr. Rohan Mehta",
        date: "2026-04-13",
        slot: "7:00 PM",
        patientName: "Anjali Gupta",
        hospitalName: "Apollo Health Center",
        issue: "Fever",
        status: "Completed",
      },
    ];

    setDoctorAppointments(staticAppointments);
  }, [doctorName]);

  const today = new Date().toISOString().split("T")[0];

  const upcomingAppointments = doctorAppointments.filter(
    (appointment) => appointment.date >= today
  );

  const pastAppointments = doctorAppointments.filter(
    (appointment) => appointment.date < today
  );

  const handleStatusChange = (id, newStatus) => {
    setDoctorAppointments((prev) =>
      prev.map((appointment) =>
        appointment.id === id
          ? { ...appointment, status: newStatus }
          : appointment
      )
    );
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
          Doctor Workspace
        </p>
        <h1
          style={{
            margin: "0 0 10px 0",
            fontSize: "34px",
            fontWeight: "700",
            color: "#111827",
          }}
        >
          Doctor Appointments
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
          View your hospital timings, upcoming appointments, past appointments, and update patient visit status.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: "20px",
          marginBottom: "28px",
        }}
      >
        <div style={summaryCardStyle}>
          <div style={blueIconStyle}>🏥</div>
          <h3 style={summaryTitleStyle}>Assigned Hospitals</h3>
          <p style={summaryValueStyle}>{doctorHospitals.length}</p>
          <span style={summarySubTextStyle}>Locations under your schedule</span>
        </div>

        <div style={summaryCardStyle}>
          <div style={greenIconStyle}>📅</div>
          <h3 style={summaryTitleStyle}>Upcoming Appointments</h3>
          <p style={summaryValueStyle}>{upcomingAppointments.length}</p>
          <span style={summarySubTextStyle}>Appointments from today onward</span>
        </div>

        <div style={summaryCardStyle}>
          <div style={yellowIconStyle}>🕘</div>
          <h3 style={summaryTitleStyle}>Past Appointments</h3>
          <p style={summaryValueStyle}>{pastAppointments.length}</p>
          <span style={summarySubTextStyle}>Completed or older visits</span>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "24px",
          borderRadius: "20px",
          boxShadow: "0 12px 32px rgba(15, 23, 42, 0.06)",
          border: "1px solid #e5eef8",
          marginBottom: "24px",
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
            Hospital Working Hours
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: "14px",
              color: "#6b7280",
            }}
          >
            Review assigned hospital timings and locations.
          </p>
        </div>

        <div style={{ display: "grid", gap: "16px" }}>
          {doctorHospitals.map((hospital) => (
            <div
              key={hospital.id}
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: "16px",
                padding: "18px",
                backgroundColor: "#f8fbff",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "16px",
                flexWrap: "wrap",
              }}
            >
              <div>
                <h3
                  style={{
                    margin: "0 0 8px 0",
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "#111827",
                  }}
                >
                  {hospital.name}
                </h3>
                <p style={hospitalInfoTextStyle}>
                  <strong>Location:</strong> {hospital.location}
                </p>
                <p style={hospitalInfoTextStyle}>
                  <strong>Timing:</strong> {hospital.startTime} - {hospital.endTime}
                </p>
              </div>

              <div
                style={{
                  padding: "8px 14px",
                  borderRadius: "999px",
                  backgroundColor: "#eff6ff",
                  color: "#2563eb",
                  fontSize: "13px",
                  fontWeight: "600",
                }}
              >
                Active Schedule
              </div>
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
          marginBottom: "24px",
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
            Upcoming Appointments
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: "14px",
              color: "#6b7280",
            }}
          >
            Manage upcoming visits and update appointment status.
          </p>
        </div>

        {upcomingAppointments.length === 0 ? (
          <p style={{ color: "#64748b", margin: 0 }}>No upcoming appointments.</p>
        ) : (
          <div style={{ display: "grid", gap: "16px" }}>
            {upcomingAppointments.map((appointment) => (
              <div
                key={appointment.id}
                style={{
                  border: "1px solid #e5e7eb",
                  borderRadius: "16px",
                  padding: "18px",
                  backgroundColor: "#f8fbff",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "16px",
                    flexWrap: "wrap",
                    marginBottom: "14px",
                  }}
                >
                  <div>
                    <h3
                      style={{
                        margin: "0 0 8px 0",
                        fontSize: "18px",
                        fontWeight: "700",
                        color: "#111827",
                      }}
                    >
                      {appointment.patientName}
                    </h3>
                    <p style={appointmentInfoTextStyle}>
                      <strong>Doctor:</strong> {appointment.doctorName}
                    </p>
                    <p style={appointmentInfoTextStyle}>
                      <strong>Hospital:</strong> {appointment.hospitalName}
                    </p>
                  </div>

                  <span style={getStatusBadgeStyle(appointment.status)}>
                    {appointment.status}
                  </span>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                    gap: "14px",
                    marginBottom: "16px",
                  }}
                >
                  <div style={detailBoxStyle}>
                    <span style={detailLabelStyle}>Date</span>
                    <span style={detailValueStyle}>{appointment.date}</span>
                  </div>
                  <div style={detailBoxStyle}>
                    <span style={detailLabelStyle}>Time</span>
                    <span style={detailValueStyle}>{appointment.slot}</span>
                  </div>
                  <div style={detailBoxStyle}>
                    <span style={detailLabelStyle}>Issue</span>
                    <span style={detailValueStyle}>{appointment.issue}</span>
                  </div>
                </div>

                <div style={{ marginTop: "6px" }}>
                  <label style={labelStyle}>Status</label>
                  <select
                    value={appointment.status}
                    onChange={(e) =>
                      handleStatusChange(appointment.id, e.target.value)
                    }
                    style={inputStyle}
                  >
                    <option value="Scheduled">Scheduled</option>
                    <option value="Completed">Completed</option>
                    <option value="Missed">Missed</option>
                    <option value="Rescheduled">Rescheduled</option>
                  </select>
                </div>
              </div>
            ))}
          </div>
        )}
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
            Past Appointments
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: "14px",
              color: "#6b7280",
            }}
          >
            Review previous visits and update the final status if needed.
          </p>
        </div>

        {pastAppointments.length === 0 ? (
          <p style={{ color: "#64748b", margin: 0 }}>No past appointments.</p>
        ) : (
          <div style={{ display: "grid", gap: "16px" }}>
            {pastAppointments.map((appointment) => (
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
                    gap: "16px",
                    flexWrap: "wrap",
                    marginBottom: "14px",
                  }}
                >
                  <div>
                    <h3
                      style={{
                        margin: "0 0 8px 0",
                        fontSize: "18px",
                        fontWeight: "700",
                        color: "#111827",
                      }}
                    >
                      {appointment.patientName}
                    </h3>
                    <p style={appointmentInfoTextStyle}>
                      <strong>Doctor:</strong> {appointment.doctorName}
                    </p>
                    <p style={appointmentInfoTextStyle}>
                      <strong>Hospital:</strong> {appointment.hospitalName}
                    </p>
                  </div>

                  <span style={getStatusBadgeStyle(appointment.status)}>
                    {appointment.status}
                  </span>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                    gap: "14px",
                    marginBottom: "16px",
                  }}
                >
                  <div style={detailBoxStyle}>
                    <span style={detailLabelStyle}>Date</span>
                    <span style={detailValueStyle}>{appointment.date}</span>
                  </div>
                  <div style={detailBoxStyle}>
                    <span style={detailLabelStyle}>Time</span>
                    <span style={detailValueStyle}>{appointment.slot}</span>
                  </div>
                  <div style={detailBoxStyle}>
                    <span style={detailLabelStyle}>Issue</span>
                    <span style={detailValueStyle}>{appointment.issue}</span>
                  </div>
                </div>

                <div style={{ marginTop: "6px" }}>
                  <label style={labelStyle}>Status</label>
                  <select
                    value={appointment.status}
                    onChange={(e) =>
                      handleStatusChange(appointment.id, e.target.value)
                    }
                    style={inputStyle}
                  >
                    <option value="Scheduled">Scheduled</option>
                    <option value="Completed">Completed</option>
                    <option value="Missed">Missed</option>
                    <option value="Rescheduled">Rescheduled</option>
                  </select>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const summaryCardStyle = {
  backgroundColor: "#ffffff",
  padding: "24px",
  borderRadius: "18px",
  boxShadow: "0 12px 30px rgba(15, 23, 42, 0.06)",
  border: "1px solid #e5eef8",
};

const summaryTitleStyle = {
  margin: "0 0 8px 0",
  fontSize: "16px",
  fontWeight: "600",
  color: "#4b5563",
};

const summaryValueStyle = {
  margin: "0 0 6px 0",
  fontSize: "32px",
  fontWeight: "700",
  color: "#111827",
};

const summarySubTextStyle = {
  fontSize: "13px",
  color: "#6b7280",
};

const blueIconStyle = {
  width: "48px",
  height: "48px",
  borderRadius: "14px",
  backgroundColor: "#eaf3ff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "16px",
  fontSize: "22px",
};

const greenIconStyle = {
  width: "48px",
  height: "48px",
  borderRadius: "14px",
  backgroundColor: "#eefaf3",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "16px",
  fontSize: "22px",
};

const yellowIconStyle = {
  width: "48px",
  height: "48px",
  borderRadius: "14px",
  backgroundColor: "#fef3c7",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "16px",
  fontSize: "22px",
};

const hospitalInfoTextStyle = {
  margin: "4px 0",
  fontSize: "14px",
  color: "#475569",
};

const appointmentInfoTextStyle = {
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

const labelStyle = {
  display: "block",
  marginBottom: "8px",
  fontSize: "14px",
  color: "#334155",
  fontWeight: "600",
};

const inputStyle = {
  width: "240px",
  padding: "11px 12px",
  borderRadius: "10px",
  border: "1px solid #cbd5e1",
  outline: "none",
  fontSize: "14px",
  boxSizing: "border-box",
  backgroundColor: "#ffffff",
  color: "#111827",
};

const getStatusBadgeStyle = (status) => {
  if (status === "Completed") {
    return {
      display: "inline-block",
      padding: "7px 14px",
      borderRadius: "999px",
      backgroundColor: "#dcfce7",
      color: "#15803d",
      fontSize: "13px",
      fontWeight: "600",
    };
  }

  if (status === "Missed") {
    return {
      display: "inline-block",
      padding: "7px 14px",
      borderRadius: "999px",
      backgroundColor: "#fee2e2",
      color: "#dc2626",
      fontSize: "13px",
      fontWeight: "600",
    };
  }

  if (status === "Rescheduled") {
    return {
      display: "inline-block",
      padding: "7px 14px",
      borderRadius: "999px",
      backgroundColor: "#ede9fe",
      color: "#7c3aed",
      fontSize: "13px",
      fontWeight: "600",
    };
  }

  return {
    display: "inline-block",
    padding: "7px 14px",
    borderRadius: "999px",
    backgroundColor: "#eff6ff",
    color: "#2563eb",
    fontSize: "13px",
    fontWeight: "600",
  };
};

export default DoctorAppointments;