import React, { useState } from "react";

function Signup({ onSwitchToLogin, onSignupSuccess }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background:
        "linear-gradient(135deg, #ecfeff 0%, #f8fafc 45%, #eef2ff 100%)",
      padding: "24px",
      boxSizing: "border-box",
      position: "relative",
      overflow: "hidden",
    },
    backgroundGlowTop: {
      position: "absolute",
      top: "-120px",
      right: "-70px",
      width: "280px",
      height: "280px",
      borderRadius: "50%",
      background: "rgba(20, 184, 166, 0.12)",
      filter: "blur(22px)",
    },
    backgroundGlowBottom: {
      position: "absolute",
      bottom: "-140px",
      left: "-100px",
      width: "320px",
      height: "320px",
      borderRadius: "50%",
      background: "rgba(59, 130, 246, 0.10)",
      filter: "blur(26px)",
    },
    wrapper: {
      width: "100%",
      maxWidth: "1080px",
      display: "grid",
      gridTemplateColumns: "1.02fr 0.98fr",
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
        "linear-gradient(180deg, rgba(240,253,250,0.95) 0%, rgba(248,250,252,0.96) 100%)",
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
      backgroundColor: "#ccfbf1",
      color: "#0f766e",
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
      maxWidth: "430px",
    },
    infoCard: {
      backgroundColor: "rgba(255,255,255,0.80)",
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
      maxWidth: "440px",
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
      textAlign: "center",
      color: "#0f172a",
      letterSpacing: "-0.02em",
    },
    subtitle: {
      margin: "0 0 24px 0",
      fontSize: "14px",
      color: "#64748b",
      textAlign: "center",
      lineHeight: "1.6",
    },
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
      marginTop: "10px",
      padding: "13px",
      border: "none",
      borderRadius: "14px",
      background: "linear-gradient(135deg, #0f766e 0%, #14b8a6 100%)",
      color: "#ffffff",
      fontSize: "15px",
      fontWeight: "700",
      cursor: "pointer",
      boxShadow: "0 14px 24px rgba(20, 184, 166, 0.22)",
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
      color: "#0f766e",
      cursor: "pointer",
      fontWeight: "700",
      padding: 0,
      marginLeft: "6px",
    },
  };

  const validate = () => {
    const nextErrors = {};

    if (!name.trim()) nextErrors.name = "Name is required";
    if (!email.trim()) nextErrors.email = "Email is required";
    if (!password) nextErrors.password = "Password is required";
    else if (password.length < 6) {
      nextErrors.password = "Password must be at least 6 characters";
    }
    if (!confirmPassword) nextErrors.confirmPassword = "Confirm password is required";
    else if (confirmPassword !== password) {
      nextErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert(`Signup successful, ${name || "User"}!`);
      onSignupSuccess();
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.backgroundGlowTop}></div>
      <div style={styles.backgroundGlowBottom}></div>

      <div style={styles.wrapper}>
        <div style={styles.leftPanel}>
          <div style={styles.badge}>Create Secure Access</div>

          <h1 style={styles.leftTitle}>
            Start using your healthcare workspace with confidence
          </h1>

          <p style={styles.leftText}>
            Create your account to access a centralized healthcare dashboard for
            appointments, patient records, doctor workflows, follow-ups, and
            treatment coordination.
          </p>

          <div style={styles.infoGrid}>
            <div style={styles.infoCard}>
              <h3 style={styles.infoTitle}>Organized care management</h3>
              <p style={styles.infoText}>
                Keep healthcare operations structured through one clean, modern,
                and collaborative platform.
              </p>
            </div>

            <div style={styles.infoCard}>
              <h3 style={styles.infoTitle}>Built for admin and doctor flows</h3>
              <p style={styles.infoText}>
                Support hospital coordination, doctor availability, follow-ups,
                prescriptions, and patient care journeys.
              </p>
            </div>
          </div>
        </div>

        <div style={styles.cardWrap}>
          <form style={styles.card} onSubmit={handleSubmit}>
            <h1 style={styles.title}>Create account</h1>
            <p style={styles.subtitle}>
              Sign up to continue building and managing your healthcare system.
            </p>

            <div style={styles.fieldWrap}>
              <label style={styles.label}>Name</label>
              <input
                style={styles.input}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
              />
              {errors.name && <div style={styles.error}>{errors.name}</div>}
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
                placeholder="Create password"
              />
              {errors.password && <div style={styles.error}>{errors.password}</div>}
            </div>

            <div style={styles.fieldWrap}>
              <label style={styles.label}>Confirm Password</label>
              <input
                style={styles.input}
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm password"
              />
              {errors.confirmPassword && (
                <div style={styles.error}>{errors.confirmPassword}</div>
              )}
            </div>

            <button type="submit" style={styles.button}>
              Signup
            </button>

            <div style={styles.switchWrap}>
              Already have an account?
              <button
                type="button"
                style={styles.switchButton}
                onClick={onSwitchToLogin}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;