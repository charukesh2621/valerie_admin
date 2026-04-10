import { useState } from "react";

function DoctorManagement() {
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      name: "Dr. Rohan Mehta",
      email: "rohan.mehta@healthcare.com",
      specialization: "Cardiologist",
      hospitals: "City Care Hospital, Apollo Health Center",
    },
    {
      id: 2,
      name: "Dr. Priya Sharma",
      email: "priya.sharma@healthcare.com",
      specialization: "Diabetologist",
      hospitals: "Sunrise Hospital",
    },
  ]);

  const [newDoctor, setNewDoctor] = useState({
    name: "",
    email: "",
    specialization: "",
    hospitals: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewDoctor((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddDoctor = () => {
    if (
      !newDoctor.name.trim() ||
      !newDoctor.email.trim() ||
      !newDoctor.specialization.trim() ||
      !newDoctor.hospitals.trim()
    ) {
      alert("Please fill all fields");
      return;
    }

    const doctorToAdd = {
      id: Date.now(),
      ...newDoctor,
    };

    setDoctors((prev) => [...prev, doctorToAdd]);

    setNewDoctor({
      name: "",
      email: "",
      specialization: "",
      hospitals: "",
    });
  };

  const handleRemoveDoctor = (id) => {
    setDoctors((prev) => prev.filter((doctor) => doctor.id !== id));
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
          Doctor Account Management
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
          Add new doctors, manage their professional details, and keep hospital assignments organized from one place.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "380px 1fr",
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
            position: "sticky",
            top: "24px",
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
              Add New Doctor
            </h2>
            <p
              style={{
                margin: 0,
                fontSize: "14px",
                color: "#6b7280",
                lineHeight: "1.6",
              }}
            >
              Fill in the doctor profile details and assign their hospital access.
            </p>
          </div>

          <div style={{ display: "grid", gap: "14px" }}>
            <input
              type="text"
              name="name"
              placeholder="Doctor Name"
              value={newDoctor.name}
              onChange={handleChange}
              style={inputStyle}
            />

            <input
              type="email"
              name="email"
              placeholder="Doctor Email"
              value={newDoctor.email}
              onChange={handleChange}
              style={inputStyle}
            />

            <input
              type="text"
              name="specialization"
              placeholder="Specialization"
              value={newDoctor.specialization}
              onChange={handleChange}
              style={inputStyle}
            />

            <input
              type="text"
              name="hospitals"
              placeholder="Hospitals (comma separated)"
              value={newDoctor.hospitals}
              onChange={handleChange}
              style={inputStyle}
            />

            <button
              onClick={handleAddDoctor}
              style={{
                padding: "13px",
                background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
                color: "white",
                border: "none",
                borderRadius: "12px",
                cursor: "pointer",
                fontSize: "15px",
                fontWeight: "600",
                boxShadow: "0 10px 20px rgba(37, 99, 235, 0.18)",
              }}
            >
              Add Doctor
            </button>
          </div>
        </div>

        <div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: "18px",
              marginBottom: "24px",
            }}
          >
            <div style={summaryCardStyle}>
              <div style={blueIconStyle}>👨‍⚕️</div>
              <h3 style={summaryTitleStyle}>Total Doctors</h3>
              <p style={summaryValueStyle}>{doctors.length}</p>
              <span style={summarySubTextStyle}>Registered doctor accounts</span>
            </div>

            <div style={summaryCardStyle}>
              <div style={greenIconStyle}>🏥</div>
              <h3 style={summaryTitleStyle}>Hospital Coverage</h3>
              <p style={summaryValueStyle}>Active</p>
              <span style={summarySubTextStyle}>Doctors mapped to hospitals</span>
            </div>

            <div style={summaryCardStyle}>
              <div style={yellowIconStyle}>🗂️</div>
              <h3 style={summaryTitleStyle}>Management Panel</h3>
              <p style={summaryValueStyle}>Ready</p>
              <span style={summarySubTextStyle}>Hackathon demo friendly layout</span>
            </div>
          </div>

          <div>
            <div style={{ marginBottom: "16px" }}>
              <h2
                style={{
                  margin: "0 0 6px 0",
                  fontSize: "22px",
                  fontWeight: "700",
                  color: "#111827",
                }}
              >
                Doctor Overview
              </h2>
              <p
                style={{
                  margin: 0,
                  fontSize: "14px",
                  color: "#6b7280",
                }}
              >
                Review doctor profiles, specialization, and assigned hospitals.
              </p>
            </div>

            <div style={{ display: "grid", gap: "18px" }}>
              {doctors.map((doctor) => (
                <div
                  key={doctor.id}
                  style={{
                    backgroundColor: "#ffffff",
                    padding: "22px",
                    borderRadius: "20px",
                    boxShadow: "0 12px 32px rgba(15, 23, 42, 0.06)",
                    border: "1px solid #e5eef8",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "20px",
                    flexWrap: "wrap",
                  }}
                >
                  <div style={{ flex: 1, minWidth: "280px" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "14px",
                        marginBottom: "14px",
                      }}
                    >
                      <div
                        style={{
                          width: "52px",
                          height: "52px",
                          borderRadius: "16px",
                          backgroundColor: "#eaf3ff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "24px",
                        }}
                      >
                        👨‍⚕️
                      </div>

                      <div>
                        <h3
                          style={{
                            margin: "0 0 4px 0",
                            fontSize: "20px",
                            fontWeight: "700",
                            color: "#111827",
                          }}
                        >
                          {doctor.name}
                        </h3>
                        <p
                          style={{
                            margin: 0,
                            fontSize: "14px",
                            color: "#2563eb",
                            fontWeight: "600",
                          }}
                        >
                          {doctor.specialization}
                        </p>
                      </div>
                    </div>

                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                        gap: "12px",
                      }}
                    >
                      <div style={detailBoxStyle}>
                        <span style={detailLabelStyle}>Email</span>
                        <span style={detailValueStyle}>{doctor.email}</span>
                      </div>

                      <div style={detailBoxStyle}>
                        <span style={detailLabelStyle}>Hospitals</span>
                        <span style={detailValueStyle}>{doctor.hospitals}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleRemoveDoctor(doctor.id)}
                    style={{
                      padding: "11px 18px",
                      background: "linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)",
                      color: "white",
                      border: "none",
                      borderRadius: "10px",
                      cursor: "pointer",
                      fontSize: "14px",
                      fontWeight: "600",
                      boxShadow: "0 10px 20px rgba(220, 38, 38, 0.16)",
                    }}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: "12px",
  border: "1px solid #cbd5e1",
  fontSize: "14px",
  outline: "none",
  boxSizing: "border-box",
  backgroundColor: "#ffffff",
  color: "#111827",
};

const summaryCardStyle = {
  backgroundColor: "#ffffff",
  padding: "22px",
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
  fontSize: "30px",
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

export default DoctorManagement;