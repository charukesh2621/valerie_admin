import { useState } from "react";

function DoctorFollowUps() {
  const [followUps, setFollowUps] = useState([
    {
      id: 1,
      patientName: "Ramesh Kumar",
      hospitalName: "City Care Hospital",
      appointmentDate: "2026-04-10",
      metDoctor: "Yes",
      startedMedicine: "Yes",
      feelingWell: "A little better, but still feeling weakness.",
      medicineSuiting: "Mostly yes, but I feel slight dizziness after taking it.",
      hasProblem: true,
      patientProblem: "Feeling dizziness after medicine in the morning.",
      doctorReply: "",
      replied: false,
    },
    {
      id: 2,
      patientName: "Sunita Sharma",
      hospitalName: "City Care Hospital",
      appointmentDate: "2026-04-09",
      metDoctor: "Yes",
      startedMedicine: "Yes",
      feelingWell: "Yes, I am feeling better than before.",
      medicineSuiting: "Yes, no issues so far.",
      hasProblem: false,
      patientProblem: "",
      doctorReply: "",
      replied: false,
    },
    {
      id: 3,
      patientName: "Arjun Verma",
      hospitalName: "Apollo Health Center",
      appointmentDate: "2026-04-08",
      metDoctor: "Yes",
      startedMedicine: "No",
      feelingWell: "Not much improvement yet.",
      medicineSuiting: "I have not started the medicine yet.",
      hasProblem: true,
      patientProblem: "I am confused about when to take the medicines.",
      doctorReply: "",
      replied: false,
    },
  ]);

  const handleReplyChange = (id, value) => {
    setFollowUps((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, doctorReply: value } : item
      )
    );
  };

  const handleSendReply = (id) => {
    setFollowUps((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, replied: true }
          : item
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
          Patient Medicine Follow-Ups
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
          Review patient medication feedback after appointments and respond if they report any issue.
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
          <div style={blueIconStyle}>📋</div>
          <h3 style={summaryTitleStyle}>Total Follow-Ups</h3>
          <p style={summaryValueStyle}>{followUps.length}</p>
          <span style={summarySubTextStyle}>Patient follow-up records</span>
        </div>

        <div style={summaryCardStyle}>
          <div style={redIconStyle}>⚠️</div>
          <h3 style={summaryTitleStyle}>Issues Reported</h3>
          <p style={summaryValueStyle}>
            {followUps.filter((item) => item.hasProblem).length}
          </p>
          <span style={summarySubTextStyle}>Patients needing doctor response</span>
        </div>

        <div style={summaryCardStyle}>
          <div style={greenIconStyle}>✅</div>
          <h3 style={summaryTitleStyle}>Responses Sent</h3>
          <p style={summaryValueStyle}>
            {followUps.filter((item) => item.replied).length}
          </p>
          <span style={summarySubTextStyle}>Completed follow-up replies</span>
        </div>
      </div>

      <div style={{ display: "grid", gap: "20px" }}>
        {followUps.map((item) => (
          <div
            key={item.id}
            style={{
              backgroundColor: "#ffffff",
              padding: "24px",
              borderRadius: "20px",
              boxShadow: "0 12px 32px rgba(15, 23, 42, 0.06)",
              border: "1px solid #e5eef8",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: "16px",
                flexWrap: "wrap",
                marginBottom: "18px",
              }}
            >
              <div>
                <h2
                  style={{
                    margin: "0 0 8px 0",
                    fontSize: "22px",
                    fontWeight: "700",
                    color: "#111827",
                  }}
                >
                  {item.patientName}
                </h2>
                <p style={infoTextStyle}>
                  <strong>Hospital:</strong> {item.hospitalName}
                </p>
                <p style={infoTextStyle}>
                  <strong>Appointment Date:</strong> {item.appointmentDate}
                </p>
              </div>

              <span
                style={{
                  display: "inline-block",
                  padding: "8px 14px",
                  borderRadius: "999px",
                  backgroundColor: item.hasProblem ? "#fee2e2" : "#dcfce7",
                  color: item.hasProblem ? "#dc2626" : "#15803d",
                  fontSize: "13px",
                  fontWeight: "600",
                }}
              >
                {item.hasProblem ? "Issue Reported" : "Stable Follow-Up"}
              </span>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: "14px",
                marginBottom: "18px",
              }}
            >
              <div style={detailBoxStyle}>
                <span style={detailLabelStyle}>Met Doctor</span>
                <span style={detailValueStyle}>{item.metDoctor}</span>
              </div>
              <div style={detailBoxStyle}>
                <span style={detailLabelStyle}>Started Medicine</span>
                <span style={detailValueStyle}>{item.startedMedicine}</span>
              </div>
            </div>

            <div
              style={{
                backgroundColor: "#f8fbff",
                border: "1px solid #e5e7eb",
                borderRadius: "16px",
                padding: "16px",
                marginBottom: "18px",
              }}
            >
              <p style={questionTextStyle}>
                <strong>1. Are you feeling well?</strong> {item.feelingWell}
              </p>
              <p style={questionTextStyle}>
                <strong>2. Are the medicines suiting you? Any problem?</strong>{" "}
                {item.medicineSuiting}
              </p>

              <p style={{ ...questionTextStyle, marginBottom: item.hasProblem ? "8px" : 0 }}>
                <strong>Problem Reported:</strong>{" "}
                <span style={{ color: item.hasProblem ? "#dc2626" : "#16a34a", fontWeight: "600" }}>
                  {item.hasProblem ? "Yes" : "No"}
                </span>
              </p>

              {item.hasProblem && (
                <div
                  style={{
                    marginTop: "12px",
                    padding: "12px 14px",
                    borderRadius: "12px",
                    backgroundColor: "#fff7ed",
                    border: "1px solid #fed7aa",
                  }}
                >
                  <p style={{ margin: 0, color: "#9a3412", fontSize: "14px" }}>
                    <strong>Patient Issue:</strong> {item.patientProblem}
                  </p>
                </div>
              )}
            </div>

            {item.hasProblem ? (
              <div>
                <label style={labelStyle}>Doctor Response</label>

                <textarea
                  rows="4"
                  value={item.doctorReply}
                  onChange={(e) => handleReplyChange(item.id, e.target.value)}
                  placeholder="Write your response to the patient here..."
                  style={textAreaStyle}
                />

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    flexWrap: "wrap",
                  }}
                >
                  <button
                    onClick={() => handleSendReply(item.id)}
                    disabled={!item.doctorReply.trim()}
                    style={{
                      padding: "11px 18px",
                      border: "none",
                      borderRadius: "10px",
                      cursor: item.doctorReply.trim() ? "pointer" : "not-allowed",
                      background: item.doctorReply.trim()
                        ? "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)"
                        : "#94a3b8",
                      color: "white",
                      fontSize: "14px",
                      fontWeight: "600",
                      boxShadow: item.doctorReply.trim()
                        ? "0 8px 18px rgba(37, 99, 235, 0.18)"
                        : "none",
                    }}
                  >
                    Send Response
                  </button>

                  {item.replied && (
                    <p
                      style={{
                        margin: 0,
                        color: "#16a34a",
                        fontWeight: "600",
                        fontSize: "14px",
                      }}
                    >
                      Response sent to patient
                    </p>
                  )}
                </div>
              </div>
            ) : (
              <div
                style={{
                  padding: "14px 16px",
                  borderRadius: "12px",
                  backgroundColor: "#ecfdf5",
                  color: "#166534",
                  fontWeight: "600",
                  border: "1px solid #bbf7d0",
                }}
              >
                No issue reported by patient.
              </div>
            )}
          </div>
        ))}
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

const infoTextStyle = {
  margin: "4px 0",
  fontSize: "14px",
  color: "#475569",
};

const questionTextStyle = {
  margin: "0 0 10px 0",
  fontSize: "14px",
  color: "#334155",
  lineHeight: "1.7",
};

const detailBoxStyle = {
  backgroundColor: "#ffffff",
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

const labelStyle = {
  display: "block",
  marginBottom: "8px",
  fontSize: "14px",
  color: "#334155",
  fontWeight: "600",
};

const textAreaStyle = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: "12px",
  border: "1px solid #cbd5e1",
  outline: "none",
  fontSize: "14px",
  boxSizing: "border-box",
  resize: "vertical",
  marginBottom: "12px",
  backgroundColor: "#ffffff",
  color: "#111827",
};

export default DoctorFollowUps;