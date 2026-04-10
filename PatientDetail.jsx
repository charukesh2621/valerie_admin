import { useState } from "react";

function PatientDetail({ patient }) {
  const defaultPatient = {
    id: "P001",
    name: "Rahul Sharma",
    age: 24,
    gender: "Male",
    symptoms: "Fever, Headache",
    aiResponse: "Possible viral infection",
    riskLevel: "High",
  };

  const currentPatient = patient || defaultPatient;

  const [note, setNote] = useState("");
  const [savedNote, setSavedNote] = useState("");

  const [prescription, setPrescription] = useState({
    medicine: "",
    dosage: "",
    frequency: "",
    duration: "",
  });
  const [savedPrescription, setSavedPrescription] = useState(null);

  const [reminder, setReminder] = useState({
    medicine: "",
    time: "",
    note: "",
  });
  const [savedReminder, setSavedReminder] = useState(null);

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
          Patient Detail
        </h1>
        <p
          style={{
            margin: 0,
            fontSize: "15px",
            color: "#6b7280",
          }}
        >
          Review patient health information, AI analysis, notes, prescriptions, and reminders.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "24px",
          alignItems: "start",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div style={cardStyle}>
            <div style={cardHeaderStyle}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "14px",
                  backgroundColor: "#eaf3ff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "22px",
                }}
              >
                👤
              </div>
              <div>
                <h2 style={titleStyle}>Patient Info</h2>
                <p style={subTextStyle}>Basic profile and identification details</p>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: "16px",
                marginTop: "18px",
              }}
            >
              <div style={infoBoxStyle}>
                <span style={labelStyle}>Name</span>
                <span style={valueStyle}>{currentPatient.name}</span>
              </div>
              <div style={infoBoxStyle}>
                <span style={labelStyle}>Patient ID</span>
                <span style={valueStyle}>{currentPatient.id}</span>
              </div>
              <div style={infoBoxStyle}>
                <span style={labelStyle}>Age</span>
                <span style={valueStyle}>{currentPatient.age}</span>
              </div>
              <div style={infoBoxStyle}>
                <span style={labelStyle}>Gender</span>
                <span style={valueStyle}>{currentPatient.gender}</span>
              </div>
            </div>
          </div>

          <div style={cardStyle}>
            <div style={cardHeaderStyle}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "14px",
                  backgroundColor: "#eefaf3",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "22px",
                }}
              >
                🧠
              </div>
              <div>
                <h2 style={titleStyle}>AI Analysis</h2>
                <p style={subTextStyle}>System-generated health summary and case priority</p>
              </div>
            </div>

            <div style={{ marginTop: "18px", display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={analysisRowStyle}>
                <span style={labelStyle}>Symptoms</span>
                <span style={valueStyle}>{currentPatient.symptoms}</span>
              </div>
              <div style={analysisRowStyle}>
                <span style={labelStyle}>AI Response</span>
                <span style={valueStyle}>{currentPatient.aiResponse}</span>
              </div>
              <div style={analysisRowStyle}>
                <span style={labelStyle}>Risk Level</span>
                <span
                  style={{
                    display: "inline-block",
                    padding: "7px 14px",
                    borderRadius: "999px",
                    fontSize: "13px",
                    fontWeight: "600",
                    backgroundColor:
                      currentPatient.riskLevel === "High"
                        ? "#fee2e2"
                        : currentPatient.riskLevel === "Medium"
                        ? "#fef3c7"
                        : "#e0f2fe",
                    color:
                      currentPatient.riskLevel === "High"
                        ? "#dc2626"
                        : currentPatient.riskLevel === "Medium"
                        ? "#b45309"
                        : "#0369a1",
                    alignSelf: "flex-start",
                  }}
                >
                  {currentPatient.riskLevel}
                </span>
              </div>
            </div>
          </div>

          <div style={cardStyle}>
            <div style={cardHeaderStyle}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "14px",
                  backgroundColor: "#f3f4f6",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "22px",
                }}
              >
                📝
              </div>
              <div>
                <h2 style={titleStyle}>Doctor Note</h2>
                <p style={subTextStyle}>Add quick clinical notes for this patient</p>
              </div>
            </div>

            <div style={{ marginTop: "18px" }}>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Write note..."
                style={textAreaStyle}
              />

              <button onClick={() => setSavedNote(note)} style={buttonStyle}>
                Save Note
              </button>

              {savedNote && (
                <div style={successBoxStyle}>
                  <p style={{ margin: 0, color: "#15803d", fontWeight: "600" }}>Saved Note</p>
                  <p style={{ margin: "8px 0 0 0", color: "#166534" }}>{savedNote}</p>
                </div>
              )}
            </div>
          </div>

          <div style={cardStyle}>
            <div style={cardHeaderStyle}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "14px",
                  backgroundColor: "#eff6ff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "22px",
                }}
              >
                💊
              </div>
              <div>
                <h2 style={titleStyle}>Prescription</h2>
                <p style={subTextStyle}>Add medicine details for treatment plan</p>
              </div>
            </div>

            <div style={{ marginTop: "18px" }}>
              <input
                placeholder="Medicine"
                style={inputStyle}
                value={prescription.medicine}
                onChange={(e) =>
                  setPrescription({ ...prescription, medicine: e.target.value })
                }
              />

              <input
                placeholder="Dosage"
                style={inputStyle}
                value={prescription.dosage}
                onChange={(e) =>
                  setPrescription({ ...prescription, dosage: e.target.value })
                }
              />

              <input
                placeholder="Frequency"
                style={inputStyle}
                value={prescription.frequency}
                onChange={(e) =>
                  setPrescription({ ...prescription, frequency: e.target.value })
                }
              />

              <input
                placeholder="Duration"
                style={inputStyle}
                value={prescription.duration}
                onChange={(e) =>
                  setPrescription({ ...prescription, duration: e.target.value })
                }
              />

              <button
                onClick={() => setSavedPrescription(prescription)}
                style={buttonStyle}
              >
                Add Prescription
              </button>

              {savedPrescription && (
                <div style={successBoxStyle}>
                  <p style={{ margin: "0 0 10px 0", color: "#15803d", fontWeight: "600" }}>
                    Saved Prescription
                  </p>
                  <div style={{ display: "grid", gap: "8px" }}>
                    <p style={savedItemTextStyle}>
                      <b>Medicine:</b> {savedPrescription.medicine}
                    </p>
                    <p style={savedItemTextStyle}>
                      <b>Dosage:</b> {savedPrescription.dosage}
                    </p>
                    <p style={savedItemTextStyle}>
                      <b>Frequency:</b> {savedPrescription.frequency}
                    </p>
                    <p style={savedItemTextStyle}>
                      <b>Duration:</b> {savedPrescription.duration}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div style={cardStyle}>
            <div style={cardHeaderStyle}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "14px",
                  backgroundColor: "#fef3c7",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "22px",
                }}
              >
                ⏰
              </div>
              <div>
                <h2 style={titleStyle}>Dose Reminder</h2>
                <p style={subTextStyle}>Schedule medicine reminder details</p>
              </div>
            </div>

            <div style={{ marginTop: "18px" }}>
              <input
                placeholder="Medicine"
                style={inputStyle}
                value={reminder.medicine}
                onChange={(e) =>
                  setReminder({ ...reminder, medicine: e.target.value })
                }
              />

              <input
                type="time"
                style={inputStyle}
                value={reminder.time}
                onChange={(e) =>
                  setReminder({ ...reminder, time: e.target.value })
                }
              />

              <input
                placeholder="Note"
                style={inputStyle}
                value={reminder.note}
                onChange={(e) =>
                  setReminder({ ...reminder, note: e.target.value })
                }
              />

              <button onClick={() => setSavedReminder(reminder)} style={buttonStyle}>
                Set Reminder
              </button>

              {savedReminder && (
                <div style={successBoxStyle}>
                  <p style={{ margin: "0 0 10px 0", color: "#15803d", fontWeight: "600" }}>
                    Reminder Scheduled
                  </p>
                  <div style={{ display: "grid", gap: "8px" }}>
                    <p style={savedItemTextStyle}>
                      <b>Medicine:</b> {savedReminder.medicine}
                    </p>
                    <p style={savedItemTextStyle}>
                      <b>Time:</b> {savedReminder.time}
                    </p>
                    <p style={savedItemTextStyle}>
                      <b>Note:</b> {savedReminder.note}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div
            style={{
              background: "linear-gradient(135deg, #eff6ff 0%, #f8fbff 100%)",
              border: "1px solid #dbeafe",
              borderRadius: "20px",
              padding: "22px",
              boxShadow: "0 12px 32px rgba(15, 23, 42, 0.04)",
            }}
          >
            <h3
              style={{
                margin: "0 0 10px 0",
                fontSize: "18px",
                fontWeight: "700",
                color: "#1e3a8a",
              }}
            >
              Quick Overview
            </h3>
            <p style={{ margin: "0 0 10px 0", color: "#475569", fontSize: "14px" }}>
              Use this panel to manage clinical notes, prescriptions, and reminder settings.
            </p>
            <p style={{ margin: 0, color: "#64748b", fontSize: "13px", lineHeight: "1.6" }}>
              Clean patient records and timely follow-ups make the dashboard look more professional during demo presentation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  backgroundColor: "#ffffff",
  padding: "24px",
  borderRadius: "20px",
  boxShadow: "0 12px 32px rgba(15, 23, 42, 0.06)",
  border: "1px solid #e5eef8",
};

const cardHeaderStyle = {
  display: "flex",
  alignItems: "center",
  gap: "14px",
};

const titleStyle = {
  margin: 0,
  fontSize: "22px",
  fontWeight: "700",
  color: "#111827",
};

const subTextStyle = {
  margin: "4px 0 0 0",
  fontSize: "14px",
  color: "#6b7280",
};

const infoBoxStyle = {
  backgroundColor: "#f8fafc",
  border: "1px solid #e5e7eb",
  borderRadius: "14px",
  padding: "14px 16px",
  display: "flex",
  flexDirection: "column",
  gap: "6px",
};

const analysisRowStyle = {
  backgroundColor: "#f8fafc",
  border: "1px solid #e5e7eb",
  borderRadius: "14px",
  padding: "14px 16px",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
};

const labelStyle = {
  fontSize: "13px",
  fontWeight: "600",
  color: "#64748b",
};

const valueStyle = {
  fontSize: "15px",
  color: "#111827",
  fontWeight: "500",
};

const inputStyle = {
  width: "100%",
  padding: "12px 14px",
  marginBottom: "12px",
  borderRadius: "12px",
  border: "1px solid #d1d5db",
  boxSizing: "border-box",
  fontSize: "14px",
  color: "#111827",
  backgroundColor: "#ffffff",
  outline: "none",
};

const textAreaStyle = {
  width: "100%",
  minHeight: "120px",
  padding: "12px 14px",
  marginBottom: "12px",
  borderRadius: "12px",
  border: "1px solid #d1d5db",
  boxSizing: "border-box",
  fontSize: "14px",
  color: "#111827",
  backgroundColor: "#ffffff",
  resize: "vertical",
  outline: "none",
};

const buttonStyle = {
  background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
  color: "#ffffff",
  padding: "11px 18px",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: "600",
  boxShadow: "0 8px 18px rgba(37, 99, 235, 0.18)",
};

const successBoxStyle = {
  marginTop: "14px",
  backgroundColor: "#f0fdf4",
  border: "1px solid #bbf7d0",
  borderRadius: "14px",
  padding: "14px 16px",
};

const savedItemTextStyle = {
  margin: 0,
  color: "#166534",
  fontSize: "14px",
};

export default PatientDetail;