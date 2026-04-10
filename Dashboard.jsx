function Dashboard({ onOpenPatients, onOpenHighRisk }) {
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
          Admin Dashboard
        </h1>
        <p
          style={{
            margin: 0,
            fontSize: "15px",
            color: "#6b7280",
          }}
        >
          Monitor patients, track reports, and review high-risk cases from one place.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: "22px",
          marginBottom: "30px",
        }}
      >
        <div
          onClick={onOpenPatients}
          style={{
            backgroundColor: "#ffffff",
            padding: "24px",
            borderRadius: "18px",
            boxShadow: "0 10px 30px rgba(15, 23, 42, 0.06)",
            cursor: "pointer",
            border: "1px solid #e5eef8",
            transition: "0.2s ease",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "14px",
              backgroundColor: "#eaf3ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "18px",
              fontSize: "22px",
            }}
          >
            👥
          </div>
          <h3
            style={{
              margin: "0 0 8px 0",
              fontSize: "16px",
              fontWeight: "600",
              color: "#4b5563",
            }}
          >
            Total Patients
          </h3>
          <p
            style={{
              margin: "0 0 6px 0",
              fontSize: "32px",
              fontWeight: "700",
              color: "#111827",
            }}
          >
            120
          </p>
          <span
            style={{
              fontSize: "13px",
              color: "#6b7280",
            }}
          >
            View complete patient records
          </span>
        </div>

        <div
          onClick={onOpenPatients}
          style={{
            backgroundColor: "#ffffff",
            padding: "24px",
            borderRadius: "18px",
            boxShadow: "0 10px 30px rgba(15, 23, 42, 0.06)",
            cursor: "pointer",
            border: "1px solid #e5eef8",
            transition: "0.2s ease",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "14px",
              backgroundColor: "#eefaf3",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "18px",
              fontSize: "22px",
            }}
          >
            📋
          </div>
          <h3
            style={{
              margin: "0 0 8px 0",
              fontSize: "16px",
              fontWeight: "600",
              color: "#4b5563",
            }}
          >
            Reports Today
          </h3>
          <p
            style={{
              margin: "0 0 6px 0",
              fontSize: "32px",
              fontWeight: "700",
              color: "#111827",
            }}
          >
            36
          </p>
          <span
            style={{
              fontSize: "13px",
              color: "#6b7280",
            }}
          >
            Daily health reports submitted
          </span>
        </div>

        <div
          onClick={onOpenHighRisk}
          style={{
            background: "linear-gradient(135deg, #ffffff 0%, #fff5f5 100%)",
            padding: "24px",
            borderRadius: "18px",
            boxShadow: "0 10px 30px rgba(15, 23, 42, 0.06)",
            cursor: "pointer",
            border: "1px solid #fde2e2",
            transition: "0.2s ease",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "14px",
              backgroundColor: "#fee2e2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "18px",
              fontSize: "22px",
            }}
          >
            🚨
          </div>
          <h3
            style={{
              margin: "0 0 8px 0",
              fontSize: "16px",
              fontWeight: "600",
              color: "#4b5563",
            }}
          >
            High Risk Cases
          </h3>
          <p
            style={{
              margin: "0 0 6px 0",
              fontSize: "32px",
              fontWeight: "700",
              color: "#dc2626",
            }}
          >
            8
          </p>
          <span
            style={{
              fontSize: "13px",
              color: "#6b7280",
            }}
          >
            Patients needing urgent review
          </span>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "26px",
          borderRadius: "20px",
          boxShadow: "0 12px 32px rgba(15, 23, 42, 0.06)",
          border: "1px solid #e5eef8",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "22px",
          }}
        >
          <div>
            <h2
              style={{
                margin: "0 0 6px 0",
                fontSize: "22px",
                fontWeight: "700",
                color: "#111827",
              }}
            >
              Recent Activity
            </h2>
            <p
              style={{
                margin: 0,
                fontSize: "14px",
                color: "#6b7280",
              }}
            >
              Latest patient reports and review status
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
            Live Overview
          </div>
        </div>

        <div
          style={{
            overflowX: "auto",
            borderRadius: "16px",
            border: "1px solid #edf2f7",
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              backgroundColor: "#ffffff",
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#f8fafc" }}>
                <th style={tableHeaderStyle}>Patient Name</th>
                <th style={tableHeaderStyle}>Symptoms</th>
                <th style={tableHeaderStyle}>Risk Level</th>
                <th style={tableHeaderStyle}>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ backgroundColor: "#ffffff" }}>
                <td style={tableCellStyle}>Rahul</td>
                <td style={tableCellStyle}>Fever, Headache</td>
                <td style={tableCellStyle}>
                  <span
                    style={{
                      padding: "6px 12px",
                      borderRadius: "999px",
                      backgroundColor: "#fee2e2",
                      color: "#dc2626",
                      fontSize: "13px",
                      fontWeight: "600",
                    }}
                  >
                    High
                  </span>
                </td>
                <td style={tableCellStyle}>
                  <span
                    style={{
                      padding: "6px 12px",
                      borderRadius: "999px",
                      backgroundColor: "#fff7ed",
                      color: "#ea580c",
                      fontSize: "13px",
                      fontWeight: "600",
                    }}
                  >
                    Pending
                  </span>
                </td>
              </tr>
              <tr style={{ backgroundColor: "#fcfdff" }}>
                <td style={tableCellStyle}>Sneha</td>
                <td style={tableCellStyle}>Cough, Cold</td>
                <td style={tableCellStyle}>
                  <span
                    style={{
                      padding: "6px 12px",
                      borderRadius: "999px",
                      backgroundColor: "#fef3c7",
                      color: "#b45309",
                      fontSize: "13px",
                      fontWeight: "600",
                    }}
                  >
                    Medium
                  </span>
                </td>
                <td style={tableCellStyle}>
                  <span
                    style={{
                      padding: "6px 12px",
                      borderRadius: "999px",
                      backgroundColor: "#dcfce7",
                      color: "#15803d",
                      fontSize: "13px",
                      fontWeight: "600",
                    }}
                  >
                    Reviewed
                  </span>
                </td>
              </tr>
              <tr style={{ backgroundColor: "#ffffff" }}>
                <td style={tableCellStyle}>Arjun</td>
                <td style={tableCellStyle}>Fatigue</td>
                <td style={tableCellStyle}>
                  <span
                    style={{
                      padding: "6px 12px",
                      borderRadius: "999px",
                      backgroundColor: "#e0f2fe",
                      color: "#0369a1",
                      fontSize: "13px",
                      fontWeight: "600",
                    }}
                  >
                    Low
                  </span>
                </td>
                <td style={tableCellStyle}>
                  <span
                    style={{
                      padding: "6px 12px",
                      borderRadius: "999px",
                      backgroundColor: "#fff7ed",
                      color: "#ea580c",
                      fontSize: "13px",
                      fontWeight: "600",
                    }}
                  >
                    Pending
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

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
};

export default Dashboard;