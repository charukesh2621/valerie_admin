import { useState } from "react";

function DoseReminders() {
  const [selectedReminder, setSelectedReminder] = useState(null);

  const reminders = [
    {
      id: "R001",
      patientName: "Rahul Sharma",
      medicine: "Paracetamol",
      dosage: "500mg",
      time: "08:00 AM",
      frequency: "2 times/day",
      status: "Active",
    },
    {
      id: "R002",
      patientName: "Sneha Reddy",
      medicine: "Cough Syrup",
      dosage: "10ml",
      time: "09:30 PM",
      frequency: "1 time/day",
      status: "Active",
    },
    {
      id: "R003",
      patientName: "Priya Nair",
      medicine: "Vitamin D",
      dosage: "1 tablet",
      time: "07:00 AM",
      frequency: "1 time/day",
      status: "Missed",
    },
    {
      id: "R004",
      patientName: "Amit Verma",
      medicine: "Iron Supplement",
      dosage: "1 capsule",
      time: "01:00 PM",
      frequency: "1 time/day",
      status: "Completed",
    },
  ];

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
          Dose Reminder Management
        </h1>
        <p
          style={{
            margin: 0,
            fontSize: "15px",
            color: "#6b7280",
            maxWidth: "800px",
            lineHeight: "1.7",
          }}
        >
          Track and manage patient medicine reminders with a clean dashboard view.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        <div style={cardStyle}>
          <div style={blueIconStyle}>⏰</div>
          <h3 style={cardTitleStyle}>Total Reminders</h3>
          <p style={cardValueStyle}>24</p>
          <span style={cardSubTextStyle}>All scheduled medication reminders</span>
        </div>

        <div style={cardStyle}>
          <div style={greenIconStyle}>✅</div>
          <h3 style={cardTitleStyle}>Active Reminders</h3>
          <p style={{ ...cardValueStyle, color: "#15803d" }}>16</p>
          <span style={cardSubTextStyle}>Currently active reminder schedules</span>
        </div>

        <div style={cardStyle}>
          <div style={redIconStyle}>⚠️</div>
          <h3 style={cardTitleStyle}>Missed Doses</h3>
          <p style={{ ...cardValueStyle, color: "#b91c1c" }}>3</p>
          <span style={cardSubTextStyle}>Patients who missed scheduled doses</span>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "24px",
          borderRadius: "20px",
          boxShadow: "0 12px 32px rgba(15, 23, 42, 0.06)",
          border: "1px solid #e5eef8",
          overflowX: "auto",
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
            Reminder Overview
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: "14px",
              color: "#6b7280",
            }}
          >
            Review reminder schedule, patient details, and current medicine status.
          </p>
        </div>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            minWidth: "950px",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#f8fafc" }}>
              <th style={tableHeaderStyle}>Reminder ID</th>
              <th style={tableHeaderStyle}>Patient Name</th>
              <th style={tableHeaderStyle}>Medicine</th>
              <th style={tableHeaderStyle}>Dosage</th>
              <th style={tableHeaderStyle}>Time</th>
              <th style={tableHeaderStyle}>Frequency</th>
              <th style={tableHeaderStyle}>Status</th>
              <th style={tableHeaderStyle}>Action</th>
            </tr>
          </thead>
          <tbody>
            {reminders.map((reminder, index) => (
              <tr
                key={reminder.id}
                style={{
                  backgroundColor: index % 2 === 0 ? "#ffffff" : "#fcfdff",
                }}
              >
                <td style={tableCellStyle}>
                  <span style={{ fontWeight: "600", color: "#2563eb" }}>
                    {reminder.id}
                  </span>
                </td>
                <td style={tableCellStyle}>{reminder.patientName}</td>
                <td style={tableCellStyle}>{reminder.medicine}</td>
                <td style={tableCellStyle}>{reminder.dosage}</td>
                <td style={tableCellStyle}>{reminder.time}</td>
                <td style={tableCellStyle}>{reminder.frequency}</td>
                <td style={tableCellStyle}>
                  <span
                    style={{
                      display: "inline-block",
                      padding: "7px 14px",
                      borderRadius: "999px",
                      fontWeight: "600",
                      fontSize: "13px",
                      backgroundColor:
                        reminder.status === "Active"
                          ? "#dcfce7"
                          : reminder.status === "Missed"
                          ? "#fee2e2"
                          : "#dbeafe",
                      color:
                        reminder.status === "Active"
                          ? "#15803d"
                          : reminder.status === "Missed"
                          ? "#b91c1c"
                          : "#1d4ed8",
                    }}
                  >
                    {reminder.status}
                  </span>
                </td>
                <td style={tableCellStyle}>
                  <button
                    style={buttonStyle}
                    onClick={() => setSelectedReminder(reminder)}
                  >
                    Manage
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedReminder && (
        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "24px",
            borderRadius: "20px",
            boxShadow: "0 12px 32px rgba(15, 23, 42, 0.06)",
            border: "1px solid #e5eef8",
            maxWidth: "760px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "18px",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <div>
              <h2
                style={{
                  margin: "0 0 6px 0",
                  color: "#111827",
                  fontSize: "22px",
                  fontWeight: "700",
                }}
              >
                Reminder Details
              </h2>
              <p
                style={{
                  margin: 0,
                  color: "#6b7280",
                  fontSize: "14px",
                }}
              >
                Review the selected patient reminder information.
              </p>
            </div>

            <button
              onClick={() => setSelectedReminder(null)}
              style={{
                background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
                color: "white",
                border: "none",
                padding: "10px 16px",
                borderRadius: "10px",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "600",
                boxShadow: "0 8px 18px rgba(239, 68, 68, 0.18)",
              }}
            >
              Close
            </button>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: "14px",
            }}
          >
            <div style={detailBoxStyle}>
              <span style={detailLabelStyle}>Reminder ID</span>
              <span style={detailValueStyle}>{selectedReminder.id}</span>
            </div>

            <div style={detailBoxStyle}>
              <span style={detailLabelStyle}>Patient Name</span>
              <span style={detailValueStyle}>{selectedReminder.patientName}</span>
            </div>

            <div style={detailBoxStyle}>
              <span style={detailLabelStyle}>Medicine</span>
              <span style={detailValueStyle}>{selectedReminder.medicine}</span>
            </div>

            <div style={detailBoxStyle}>
              <span style={detailLabelStyle}>Dosage</span>
              <span style={detailValueStyle}>{selectedReminder.dosage}</span>
            </div>

            <div style={detailBoxStyle}>
              <span style={detailLabelStyle}>Time</span>
              <span style={detailValueStyle}>{selectedReminder.time}</span>
            </div>

            <div style={detailBoxStyle}>
              <span style={detailLabelStyle}>Frequency</span>
              <span style={detailValueStyle}>{selectedReminder.frequency}</span>
            </div>

            <div style={detailBoxStyle}>
              <span style={detailLabelStyle}>Status</span>
              <span style={detailValueStyle}>{selectedReminder.status}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const cardStyle = {
  backgroundColor: "#ffffff",
  padding: "24px",
  borderRadius: "18px",
  boxShadow: "0 12px 30px rgba(15, 23, 42, 0.06)",
  border: "1px solid #e5eef8",
};

const cardTitleStyle = {
  margin: "0 0 8px 0",
  color: "#4b5563",
  fontSize: "16px",
  fontWeight: "600",
};

const cardValueStyle = {
  margin: "0 0 6px 0",
  fontSize: "32px",
  fontWeight: "700",
  color: "#111827",
};

const cardSubTextStyle = {
  fontSize: "13px",
  color: "#6b7280",
};

const tableHeaderStyle = {
  textAlign: "left",
  padding: "16px 18px",
  borderBottom: "1px solid #e5e7eb",
  color: "#475569",
  fontSize: "14px",
  fontWeight: "600",
};

const tableCellStyle = {
  padding: "18px",
  borderBottom: "1px solid #eef2f7",
  color: "#111827",
  fontSize: "14px",
  verticalAlign: "middle",
};

const buttonStyle = {
  background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
  color: "white",
  border: "none",
  padding: "10px 16px",
  borderRadius: "10px",
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: "600",
  boxShadow: "0 8px 18px rgba(37, 99, 235, 0.18)",
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

const redIconStyle = {
  width: "48px",
  height: "48px",
  borderRadius: "14px",
  backgroundColor: "#fee2e2",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "16px",
  fontSize: "22px",
};

const detailBoxStyle = {
  backgroundColor: "#f8fafc",
  border: "1px solid #e5e7eb",
  borderRadius: "14px",
  padding: "14px 16px",
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

export default DoseReminders;