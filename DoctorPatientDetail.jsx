function DoctorPatientDetail({ patient, hospital }) {
  if (!patient) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(180deg, #f8fbff 0%, #f4f7fb 100%)",
          padding: "32px",
        }}
      >
        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "24px",
            borderRadius: "20px",
            boxShadow: "0 12px 32px rgba(15, 23, 42, 0.06)",
            border: "1px solid #e5eef8",
            maxWidth: "720px",
          }}
        >
          <h2
            style={{
              margin: "0 0 8px 0",
              fontSize: "24px",
              fontWeight: "700",
              color: "#111827",
            }}
          >
            No patient selected
          </h2>
          <p
            style={{
              margin: 0,
              color: "#6b7280",
              fontSize: "14px",
              lineHeight: "1.6",
            }}
          >
            Please select a patient to view detailed medical information.
          </p>
        </div>
      </div>
    );
  }

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
          Patient Details
        </h1>
        <p
          style={{
            margin: 0,
            fontSize: "15px",
            color: "#6b7280",
            maxWidth: "840px",
            lineHeight: "1.7",
          }}
        >
          Review the complete patient profile, treatment status, and follow-up information.
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
          <div style={blueIconStyle}>👤</div>
          <h3 style={summaryTitleStyle}>Patient Name</h3>
          <p style={summaryValueStyleSmall}>{patient.name}</p>
          <span style={summarySubTextStyle}>Current selected patient</span>
        </div>

        <div style={summaryCardStyle}>
          <div style={redIconStyle}>🚨</div>
          <h3 style={summaryTitleStyle}>Risk Level</h3>
          <p
            style={{
              ...summaryValueStyleSmall,
              color:
                patient.riskLevel === "High"
                  ? "#b91c1c"
                  : patient.riskLevel === "Medium"
                  ? "#b45309"
                  : "#15803d",
            }}
          >
            {patient.riskLevel}
          </p>
          <span style={summarySubTextStyle}>Patient severity status</span>
        </div>

        <div style={summaryCardStyle}>
          <div style={greenIconStyle}>🏥</div>
          <h3 style={summaryTitleStyle}>Hospital</h3>
          <p style={summaryValueStyleSmall}>{hospital?.name || "Not Assigned"}</p>
          <span style={summarySubTextStyle}>Current treatment hospital</span>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "26px",
          borderRadius: "20px",
          boxShadow: "0 12px 32px rgba(15, 23, 42, 0.06)",
          border: "1px solid #e5eef8",
          maxWidth: "1100px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "22px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "18px",
              backgroundColor: "#eaf3ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
            }}
          >
            🧑
          </div>

          <div>
            <h2
              style={{
                margin: "0 0 6px 0",
                fontSize: "28px",
                fontWeight: "700",
                color: "#111827",
              }}
            >
              {patient.name}
            </h2>
            <p
              style={{
                margin: 0,
                fontSize: "14px",
                color: "#6b7280",
              }}
            >
              Complete patient profile and doctor review details
            </p>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "14px",
            marginBottom: "24px",
          }}
        >
          <div style={detailBoxStyle}>
            <span style={detailLabelStyle}>Hospital</span>
            <span style={detailValueStyle}>{hospital?.name || "Not Assigned"}</span>
          </div>

          <div style={detailBoxStyle}>
            <span style={detailLabelStyle}>Age</span>
            <span style={detailValueStyle}>{patient.age}</span>
          </div>

          <div style={detailBoxStyle}>
            <span style={detailLabelStyle}>Gender</span>
            <span style={detailValueStyle}>{patient.gender}</span>
          </div>

          <div style={detailBoxStyle}>
            <span style={detailLabelStyle}>Condition</span>
            <span style={detailValueStyle}>{patient.condition}</span>
          </div>

          <div style={detailBoxStyle}>
            <span style={detailLabelStyle}>Symptoms</span>
            <span style={detailValueStyle}>{patient.symptoms}</span>
          </div>

          <div style={detailBoxStyle}>
            <span style={detailLabelStyle}>Medications</span>
            <span style={detailValueStyle}>{patient.medications.join(", ")}</span>
          </div>

          <div style={detailBoxStyle}>
            <span style={detailLabelStyle}>Risk Level</span>
            <span
              style={{
                display: "inline-block",
                padding: "7px 12px",
                borderRadius: "999px",
                fontSize: "13px",
                fontWeight: "600",
                backgroundColor:
                  patient.riskLevel === "High"
                    ? "#fee2e2"
                    : patient.riskLevel === "Medium"
                    ? "#fef3c7"
                    : "#dcfce7",
                color:
                  patient.riskLevel === "High"
                    ? "#b91c1c"
                    : patient.riskLevel === "Medium"
                    ? "#b45309"
                    : "#15803d",
                alignSelf: "flex-start",
              }}
            >
              {patient.riskLevel}
            </span>
          </div>

          <div style={detailBoxStyle}>
            <span style={detailLabelStyle}>Adherence Status</span>
            <span style={detailValueStyle}>{patient.adherenceStatus}</span>
          </div>

          <div style={detailBoxStyle}>
            <span style={detailLabelStyle}>Last Visit</span>
            <span style={detailValueStyle}>{patient.lastVisit}</span>
          </div>

          <div style={detailBoxStyle}>
            <span style={detailLabelStyle}>Next Follow-up</span>
            <span style={detailValueStyle}>{patient.followUpDate}</span>
          </div>

          <div style={detailBoxStyle}>
            <span style={detailLabelStyle}>Allergies</span>
            <span style={detailValueStyle}>{patient.allergies}</span>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#f8fbff",
            border: "1px solid #e5e7eb",
            borderRadius: "16px",
            padding: "18px",
          }}
        >
          <h3
            style={{
              margin: "0 0 10px 0",
              fontSize: "18px",
              fontWeight: "700",
              color: "#111827",
            }}
          >
            Doctor Notes
          </h3>
          <p
            style={{
              margin: 0,
              fontSize: "14px",
              color: "#475569",
              lineHeight: "1.8",
            }}
          >
            {patient.doctorNotes}
          </p>
        </div>
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

const summaryValueStyleSmall = {
  margin: "0 0 6px 0",
  fontSize: "24px",
  fontWeight: "700",
  color: "#111827",
  lineHeight: "1.4",
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
  lineHeight: "1.6",
};

export default DoctorPatientDetail;