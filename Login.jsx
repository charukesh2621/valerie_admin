import React, { useState } from "react";

function Login({ onSwitchToSignup, onLoginSuccess }) {
  const [role, setRole] = useState("admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background:
        "linear-gradient(135deg, #eff6ff 0%, #f8fafc 45%, #eef2ff 100%)",
      padding: "24px",
      boxSizing: "border-box",
      position: "relative",
      overflow: "hidden",
    },
    backgroundGlowTop: {
      position: "absolute",
      top: "-120px",
      right: "-80px",
      width: "280px",
      height: "280px",
      borderRadius: "50%",
      background: "rgba(59, 130, 246, 0.12)",
      filter: "blur(20px)",
    },
    backgroundGlowBottom: {
      position: "absolute",
      bottom: "-140px",
      left: "-90px",
      width: "320px",
      height: "320px",
      borderRadius: "50%",
      background: "rgba(14, 165, 233, 0.10)",
      filter: "blur(24px)",
    },
    wrapper: {
      width: "100%",
      maxWidth: "1080px",
      display: "grid",
      gridTemplateColumns: "1.05fr 0.95fr",
      backgroundColor: "rgba(255,255,255,0.88)",
      border: "1px solid rgba(226,232,240,0.9)",
      borderRadius: "28px",
      boxShadow: "0 24px 60px rgba(15, 23, 42, 0.10)",
      overflow: "hidden",
      position: "relative",
      zIndex: 1,
    },
    leftPanel: {
      padding: "56px 48px",
      background:
        "linear-gradient(180deg, rgba(239,246,255,0.95) 0%, rgba(248,250,252,0.96) 100%)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      borderRight: "1px solid #e2e8f0",
    },
    badge: {
      display: "inline-flex",
      alignItems: "center",
      width: "fit-content",
      padding: "8px 14px",
      borderRadius: "999px",
      backgroundColor: "#dbeafe",
      color: "#1d4ed8",
      fontSize: "13px",
      fontWeight: "700",
      letterSpacing: "0.02em",
      marginBottom: "22px",
    },
    leftTitle: {
      margin: "0 0 14px 0",
      fontSize: "40px",
      lineHeight: "1.1",
      color: "#0f172a",
      fontWeight: "800",
    },
    leftText: {
      margin: "0 0 28px 0",
      color: "#475569",
      fontSize: "16px",
      lineHeight: "1.7",
      maxWidth: "460px",
    },
    infoGrid: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: "14px",
      maxWidth: "420px",
    },
    infoCard: {
      backgroundColor: "rgba(255,255,255,0.78)",
      border: "1px solid #e2e8f0",
      borderRadius: "18px",
      padding: "16px 18px",
      boxShadow: "0 10px 24px rgba(15, 23, 42, 0.04)",
    },
    infoTitle: {
      margin: "0 0 6px 0",
      fontSize: "15px",
      fontWeight: "700",
      color: "#1e293b",
    },
    infoText: {
      margin: 0,
      fontSize: "14px",
      lineHeight: "1.6",
      color: "#64748b",
    },
    cardWrap: {
      padding: "36px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(255,255,255,0.92)",
    },
    card: {
      width: "100%",
      maxWidth: "430px",
      backgroundColor: "#ffffff",
      borderRadius: "24px",
      boxShadow: "0 18px 40px rgba(15,23,42,0.08)",
      border: "1px solid #e5e7eb",
      padding: "30px",
      boxSizing: "border-box",
    },
    title: {
      margin: "0 0 8px 0",
      fontSize: "32px",
      fontWeight: "800",
      color: "#0f172a",
      textAlign: "center",
      letterSpacing: "-0.02em",
    },
    subtitle: {
      margin: "0 0 24px 0",
      fontSize: "14px",
      color: "#64748b",
      textAlign: "center",
      lineHeight: "1.6",
    },
    roleWrap: {
      display: "flex",
      backgroundColor: "#f1f5f9",
      borderRadius: "16px",
      padding: "5px",
      marginBottom: "22px",
      border: "1px solid #e2e8f0",
    },
    roleButton: (active) => ({
      flex: 1,
      padding: "12px",
      border: "none",
      borderRadius: "12px",
      cursor: "pointer",
      background: active
        ? "linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)"
        : "transparent",
      color: active ? "#ffffff" : "#334155",
      fontSize: "14px",
      fontWeight: active ? "700" : "600",
      boxShadow: active ? "0 10px 20px rgba(37, 99, 235, 0.22)" : "none",
      transition: "all 0.2s ease",
    }),
    fieldWrap: {
      marginBottom: "16px",
    },
    label: {
      display: "block",
      marginBottom: "8px",
      fontSize: "14px",
      fontWeight: "600",
      color: "#334155",
      textAlign: "left",
    },
    input: {
      width: "100%",
      padding: "13px 14px",
      borderRadius: "14px",
      border: "1px solid #cbd5e1",
      outline: "none",
      fontSize: "14px",
      color: "#0f172a",
      backgroundColor: "#f8fafc",
      boxSizing: "border-box",
    },
    error: {
      marginTop: "6px",
      color: "#dc2626",
      fontSize: "12px",
      textAlign: "left",
      fontWeight: "500",
    },
    button: {
      width: "100%",
      marginTop: "8px",
      padding: "13px",
      border: "none",
      borderRadius: "14px",
      background: "linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)",
      color: "#ffffff",
      fontSize: "15px",
      fontWeight: "700",
      cursor: "pointer",
      boxShadow: "0 14px 24px rgba(37, 99, 235, 0.22)",
    },
    switchWrap: {
      marginTop: "18px",
      textAlign: "center",
      fontSize: "14px",
      color: "#64748b",
    },
    switchButton: {
      border: "none",
      background: "none",
      color: "#2563eb",
      cursor: "pointer",
      fontWeight: "700",
      padding: 0,
      marginLeft: "6px",
    },
  };

  const validate = () => {
    const nextErrors = {};

    if (!email.trim()) {
      nextErrors.email = "Email is required";
    }

    if (!password) {
      nextErrors.password = "Password is required";
    } else if (password.length < 6) {
      nextErrors.password = "Password must be at least 6 characters";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      onLoginSuccess(role);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.backgroundGlowTop}></div>
      <div style={styles.backgroundGlowBottom}></div>

      <div style={styles.wrapper}>
        <div style={styles.leftPanel}>
          <div style={styles.badge}>Healthcare Access Platform</div>

          <h1 style={styles.leftTitle}>
            Smarter care coordination for admins and doctors
          </h1>

          <p style={styles.leftText}>
            Access your healthcare dashboard to manage appointments, patients,
            follow-ups, reminders, and operational workflows through one clean,
            centralized system.
          </p>

          <div style={styles.infoGrid}>
            <div style={styles.infoCard}>
              <h3 style={styles.infoTitle}>Admin access</h3>
              <p style={styles.infoText}>
                Manage doctors, patient records, appointments, prescriptions,
                and hospital-wide coordination.
              </p>
            </div>

            <div style={styles.infoCard}>
              <h3 style={styles.infoTitle}>Doctor access</h3>
              <p style={styles.infoText}>
                Review your patients, upcoming appointments, follow-ups, and
                treatment-related updates in one place.
              </p>
            </div>
          </div>
        </div>

        <div style={styles.cardWrap}>
          <form style={styles.card} onSubmit={handleSubmit}>
            <h1 style={styles.title}>Log in</h1>
            <p style={styles.subtitle}>
              Choose your role and sign in to continue to your dashboard.
            </p>

            <div style={styles.roleWrap}>
              <button
                type="button"
                style={styles.roleButton(role === "admin")}
                onClick={() => setRole("admin")}
              >
                As Admin
              </button>
              <button
                type="button"
                style={styles.roleButton(role === "doctor")}
                onClick={() => setRole("doctor")}
              >
                As Doctor
              </button>
            </div>

            <div style={styles.fieldWrap}>
              <label style={styles.label}>Email</label>
              <input
                style={styles.input}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
              />
              {errors.email && <div style={styles.error}>{errors.email}</div>}
            </div>

            <div style={styles.fieldWrap}>
              <label style={styles.label}>Password</label>
              <input
                style={styles.input}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
              />
              {errors.password && (
                <div style={styles.error}>{errors.password}</div>
              )}
            </div>

            <button type="submit" style={styles.button}>
              Login
            </button>

            <div style={styles.switchWrap}>
              Don&apos;t have an account?
              <button
                type="button"
                style={styles.switchButton}
                onClick={onSwitchToSignup}
              >
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;