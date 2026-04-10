import { useState } from "react";
import Dashboard from "./Dashboard";
import PatientList from "./PatientList";
import PatientDetail from "./PatientDetail";
import HighRiskPatients from "./HighRiskPatients";
import DoseReminders from "./DoseReminders";
import PrescriptionManagement from "./PrescriptionManagement";
import Login from "./Login";
import Signup from "./Signup";
import DoctorDashboard from "./DoctorDashboard";
import DoctorHospitals from "./DoctorHospitals";
import DoctorPatients from "./DoctorPatients";
import DoctorPatientDetail from "./DoctorPatientDetail";
import DoctorManagement from "./DoctorManagement";
import AppointmentManagement from "./AppointmentManagement";
import DoctorAppointments from "./DoctorAppointments";
import DoctorFollowUps from "./DoctorFollowUps";
import DoctorRagPage from "./DoctorRagPage";

function App() {
  const [activePage, setActivePage] = useState("dashboard");
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authPage, setAuthPage] = useState("login");
  const [userRole, setUserRole] = useState("");
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [confirmedAppointments, setConfirmedAppointments] = useState([]);

  const doctorData = {
    id: "d1",
    name: "Dr. Rohan Mehta",
    specialization: "Cardiologist",
  };

  const doctorHospitals = [
    {
      id: "h1",
      name: "City Care Hospital",
      location: "Mumbai",
      patientCount: 2,
      startTime: "10:00 AM",
      endTime: "1:00 PM",
    },
    {
      id: "h2",
      name: "Apollo Health Center",
      location: "Navi Mumbai",
      patientCount: 2,
      startTime: "6:00 PM",
      endTime: "9:00 PM",
    },
  ];

  const doctorPatients = [
    {
      id: "p1",
      name: "Ramesh Kumar",
      age: 58,
      gender: "Male",
      hospitalId: "h1",
      condition: "Hypertension",
      symptoms: "Headache, dizziness",
      medications: ["Amlodipine", "Telmisartan"],
      riskLevel: "High",
      adherenceStatus: "Missed 2 doses",
      lastVisit: "2026-04-05",
      followUpDate: "2026-04-15",
      allergies: "No known allergies",
      doctorNotes: "Needs close BP monitoring and lifestyle changes.",
    },
    {
      id: "p2",
      name: "Sunita Sharma",
      age: 46,
      gender: "Female",
      hospitalId: "h1",
      condition: "Diabetes",
      symptoms: "Fatigue, increased thirst",
      medications: ["Metformin"],
      riskLevel: "Medium",
      adherenceStatus: "Regular",
      lastVisit: "2026-04-03",
      followUpDate: "2026-04-18",
      allergies: "Penicillin",
      doctorNotes: "Sugar levels improving, continue same meds.",
    },
    {
      id: "p3",
      name: "Arjun Verma",
      age: 63,
      gender: "Male",
      hospitalId: "h2",
      condition: "Heart Disease",
      symptoms: "Chest pain, breathlessness",
      medications: ["Aspirin", "Atorvastatin"],
      riskLevel: "High",
      adherenceStatus: "Missed 1 dose",
      lastVisit: "2026-04-01",
      followUpDate: "2026-04-12",
      allergies: "None",
      doctorNotes: "Monitor closely for any worsening symptoms.",
    },
    {
      id: "p4",
      name: "Priya Nair",
      age: 35,
      gender: "Female",
      hospitalId: "h2",
      condition: "Asthma",
      symptoms: "Shortness of breath",
      medications: ["Inhaler"],
      riskLevel: "Low",
      adherenceStatus: "Regular",
      lastVisit: "2026-04-04",
      followUpDate: "2026-04-20",
      allergies: "Dust allergy",
      doctorNotes: "Stable condition, continue inhaler usage.",
    },
  ];

  const handleViewPatient = (patient) => {
    setSelectedPatient(patient);
    setActivePage("patientDetail");
  };

  const handleLoginSuccess = (role) => {
    setUserRole(role);
    setIsLoggedIn(true);

    if (role === "admin") {
      setActivePage("dashboard");
    } else {
      setActivePage("doctorDashboard");
    }
  };

  const handleSelectHospital = (hospital) => {
    setSelectedHospital(hospital);
    setActivePage("doctorPatients");
  };

  const handleDoctorViewPatient = (patient) => {
    setSelectedPatient(patient);
    setActivePage("doctorPatientDetail");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setAuthPage("login");
    setUserRole("");
    setActivePage("dashboard");
    setSelectedPatient(null);
    setSelectedHospital(null);
    setConfirmedAppointments([]);
  };

  const renderPage = () => {
    if (userRole === "doctor") {
      switch (activePage) {
        case "doctorDashboard":
          return (
            <DoctorDashboard
              doctor={doctorData}
              hospitals={doctorHospitals}
              onOpenHospitals={() => setActivePage("doctorHospitals")}
            />
          );

        case "doctorHospitals":
          return (
            <DoctorHospitals
              hospitals={doctorHospitals}
              onSelectHospital={handleSelectHospital}
            />
          );

        case "doctorPatients":
          return (
            <DoctorPatients
              hospital={selectedHospital}
              patients={doctorPatients.filter(
                (patient) => patient.hospitalId === selectedHospital?.id
              )}
              onViewPatient={handleDoctorViewPatient}
            />
          );

        case "doctorPatientDetail":
          return (
            <DoctorPatientDetail
              patient={selectedPatient}
              hospital={selectedHospital}
            />
          );

        case "doctorAppointments":
          return (
            <DoctorAppointments
              doctorName={doctorData.name}
              confirmedAppointments={confirmedAppointments}
              doctorHospitals={doctorHospitals}
            />
          );

        case "doctorFollowUps":
          return <DoctorFollowUps />;

        case "doctorRagPage":
          return <DoctorRagPage />;

        default:
          return (
            <DoctorDashboard
              doctor={doctorData}
              hospitals={doctorHospitals}
              onOpenHospitals={() => setActivePage("doctorHospitals")}
            />
          );
      }
    }

    switch (activePage) {
      case "dashboard":
        return (
          <Dashboard
            onOpenPatients={() => setActivePage("patients")}
            onOpenHighRisk={() => setActivePage("highRisk")}
          />
        );

      case "patients":
        return <PatientList onViewPatient={handleViewPatient} />;

      case "patientDetail":
        return selectedPatient ? (
          <PatientDetail patient={selectedPatient} />
        ) : (
          <div
            style={{
              margin: "32px",
              padding: "24px",
              backgroundColor: "#ffffff",
              borderRadius: "20px",
              boxShadow: "0 10px 30px rgba(15, 23, 42, 0.06)",
              border: "1px solid #e5e7eb",
              color: "#334155",
              fontSize: "16px",
            }}
          >
            No patient selected
          </div>
        );

      case "highRisk":
        return <HighRiskPatients onViewCase={handleViewPatient} />;

      case "reminders":
        return <DoseReminders />;

      case "prescriptions":
        return <PrescriptionManagement />;

      case "doctorManagement":
        return <DoctorManagement />;

      case "appointments":
        return (
          <AppointmentManagement
            confirmedAppointments={confirmedAppointments}
            setConfirmedAppointments={setConfirmedAppointments}
          />
        );

      default:
        return (
          <Dashboard
            onOpenPatients={() => setActivePage("patients")}
            onOpenHighRisk={() => setActivePage("highRisk")}
          />
        );
    }
  };

  if (!isLoggedIn) {
    return authPage === "login" ? (
      <Login
        onSwitchToSignup={() => setAuthPage("signup")}
        onLoginSuccess={handleLoginSuccess}
      />
    ) : (
      <Signup
        onSwitchToLogin={() => setAuthPage("login")}
        onSignupSuccess={() => setAuthPage("login")}
      />
    );
  }

  const adminLinks = [
    { text: "Dashboard", page: "dashboard" },
    { text: "Patients", page: "patients" },
    { text: "Doctor Management", page: "doctorManagement" },
    { text: "Appointments", page: "appointments" },
    { text: "Patient Detail", page: "patientDetail" },
    { text: "High Risk Patients", page: "highRisk" },
    { text: "Dose Reminders", page: "reminders" },
    { text: "Prescriptions", page: "prescriptions" },
  ];

  const doctorLinks = [
    { text: "Doctor Dashboard", page: "doctorDashboard" },
    { text: "My Hospitals", page: "doctorHospitals" },
    { text: "Hospital Patients", page: "doctorPatients" },
    { text: "Patient Details", page: "doctorPatientDetail" },
    { text: "My Appointments", page: "doctorAppointments" },
    { text: "Patient Follow-Ups", page: "doctorFollowUps" },
    { text: "AI Patient Summary", page: "doctorRagPage" },
  ];

  const navItems = userRole === "doctor" ? doctorLinks : adminLinks;

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        background: "linear-gradient(180deg, #f8fbff 0%, #f1f5f9 100%)",
      }}
    >
      <aside
        style={{
          width: "280px",
          minHeight: "100vh",
          background: "linear-gradient(180deg, #0f172a 0%, #111827 100%)",
          color: "#ffffff",
          padding: "24px 18px",
          boxSizing: "border-box",
          boxShadow: "10px 0 30px rgba(15, 23, 42, 0.10)",
          display: "flex",
          flexDirection: "column",
          position: "sticky",
          top: 0,
        }}
      >
        <div
          style={{
            padding: "18px 16px",
            borderRadius: "18px",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.08)",
            marginBottom: "22px",
          }}
        >
          <div
            style={{
              fontSize: "12px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#93c5fd",
              marginBottom: "8px",
              fontWeight: "700",
            }}
          >
            Healthcare Dashboard
          </div>

          <h2
            style={{
              margin: "0 0 8px 0",
              fontSize: "24px",
              lineHeight: "1.2",
              color: "#ffffff",
            }}
          >
            {userRole === "doctor" ? "Doctor Panel" : "Admin Panel"}
          </h2>

          <p
            style={{
              margin: 0,
              fontSize: "14px",
              color: "#cbd5e1",
              lineHeight: "1.5",
            }}
          >
            {userRole === "doctor"
              ? "Manage appointments, patients, and follow-ups from one place."
              : "Monitor hospitals, doctors, patients, and scheduling efficiently."}
          </p>
        </div>

        <div
          style={{
            fontSize: "12px",
            fontWeight: "700",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: "#94a3b8",
            marginBottom: "12px",
            paddingLeft: "6px",
          }}
        >
          Navigation
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {navItems.map((item) => (
            <SidebarButton
              key={item.page}
              text={item.text}
              onClick={() => setActivePage(item.page)}
              active={activePage === item.page}
            />
          ))}
        </div>

        <div style={{ marginTop: "auto", paddingTop: "22px" }}>
          <div
            style={{
              padding: "14px 16px",
              borderRadius: "16px",
              background: "rgba(59, 130, 246, 0.10)",
              border: "1px solid rgba(96, 165, 250, 0.16)",
              marginBottom: "12px",
            }}
          >
            <div
              style={{
                fontSize: "13px",
                color: "#93c5fd",
                marginBottom: "6px",
                fontWeight: "700",
              }}
            >
              Logged in as
            </div>
            <div
              style={{
                fontSize: "15px",
                fontWeight: "600",
                color: "#ffffff",
                textTransform: "capitalize",
              }}
            >
              {userRole}
            </div>
          </div>

          <button
            onClick={handleLogout}
            style={{
              width: "100%",
              padding: "14px 16px",
              border: "1px solid rgba(248, 113, 113, 0.22)",
              borderRadius: "14px",
              cursor: "pointer",
              textAlign: "left",
              background: "rgba(239, 68, 68, 0.14)",
              color: "#ffffff",
              fontSize: "15px",
              fontWeight: "600",
              transition: "all 0.2s ease",
            }}
          >
            Logout
          </button>
        </div>
      </aside>

      <main
        style={{
          flex: 1,
          minWidth: 0,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            padding: "24px 28px 0 28px",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.88)",
              backdropFilter: "blur(8px)",
              border: "1px solid #e2e8f0",
              borderRadius: "22px",
              padding: "18px 22px",
              boxShadow: "0 12px 30px rgba(15, 23, 42, 0.05)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "13px",
                  color: "#64748b",
                  fontWeight: "600",
                  marginBottom: "4px",
                }}
              >
                Welcome back
              </div>
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "700",
                  color: "#0f172a",
                }}
              >
                {userRole === "doctor"
                  ? doctorData.name
                  : "Healthcare Admin Dashboard"}
              </div>
            </div>

            <div
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  padding: "10px 14px",
                  borderRadius: "14px",
                  backgroundColor: "#eff6ff",
                  color: "#1d4ed8",
                  fontSize: "14px",
                  fontWeight: "600",
                  border: "1px solid #dbeafe",
                }}
              >
                Role: {userRole}
              </div>

              <div
                style={{
                  padding: "10px 14px",
                  borderRadius: "14px",
                  backgroundColor: "#f8fafc",
                  color: "#334155",
                  fontSize: "14px",
                  fontWeight: "600",
                  border: "1px solid #e2e8f0",
                }}
              >
                Page: {activePage}
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            flex: 1,
            padding: "24px 28px 28px 28px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              minHeight: "calc(100vh - 120px)",
              borderRadius: "24px",
            }}
          >
            {renderPage()}
          </div>
        </div>
      </main>
    </div>
  );
}

function SidebarButton({ text, onClick, active }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: "100%",
        padding: "14px 16px",
        border: active ? "1px solid rgba(96, 165, 250, 0.28)" : "1px solid transparent",
        borderRadius: "14px",
        cursor: "pointer",
        textAlign: "left",
        background: active
          ? "linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)"
          : "rgba(255,255,255,0.04)",
        color: "#ffffff",
        fontSize: "15px",
        fontWeight: active ? "700" : "500",
        boxShadow: active
          ? "0 10px 24px rgba(37, 99, 235, 0.28)"
          : "none",
        transition: "all 0.2s ease",
      }}
    >
      {text}
    </button>
  );
}

export default App;