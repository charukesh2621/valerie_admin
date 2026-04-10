import React, { useState } from "react";

function DoctorRagPage() {
  const [patientId, setPatientId] = useState("");
  const [query, setQuery] = useState("");
  const [output, setOutput] = useState("Your AI result will appear here.");
  const [sources, setSources] = useState("");
  const [loading, setLoading] = useState(false);

  const sampleQueries = [
    "Give a short summary",
    "What are the main risks?",
    "Predict future complications",
    "Does this patient need medication review?",
  ];

  const handleSampleQuery = (sample) => {
    setQuery(sample);
  };

  const handleGetSummary = async () => {
    if (!patientId.trim() || !query.trim()) {
      setOutput("Please enter both patient ID and query.");
      setSources("");
      return;
    }

    setLoading(true);
    setOutput(`
      <div style="color:#334155; font-size:14px;">
        Generating summary...
      </div>
    `);
    setSources("");

    try {
      const response = await fetch("http://127.0.0.1:5000/ask-patient", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          patient_id: patientId,
          query: query,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setOutput(`
          <div style="color:#dc2626; font-size:14px; font-weight:600;">
            ${data.error || "Something went wrong."}
          </div>
        `);
        setSources("");
      } else {
        setOutput(data.answer_html || "No summary returned.");
        setSources(data.sources_html || "");
      }
    } catch (error) {
      setOutput(`
        <div style="color:#dc2626; font-size:14px; font-weight:600;">
          Could not connect to Python backend. Make sure rag_api.py is running.
        </div>
      `);
      setSources("");
    }

    setLoading(false);
  };

  return (
    <div
      style={{
        padding: "28px",
        backgroundColor: "#ffffff",
        borderRadius: "24px",
        border: "1px solid #e5e7eb",
        boxShadow: "0 10px 30px rgba(15, 23, 42, 0.06)",
      }}
    >
      <div style={{ marginBottom: "24px" }}>
        <h1
          style={{
            margin: "0 0 8px 0",
            fontSize: "30px",
            fontWeight: "800",
            color: "#0f172a",
            letterSpacing: "-0.02em",
          }}
        >
          AI Patient Summary
        </h1>

        <p
          style={{
            margin: 0,
            fontSize: "15px",
            color: "#64748b",
            lineHeight: "1.6",
          }}
        >
          Enter patient ID and ask a clinical question to generate a structured
          AI-powered summary for doctor review.
        </p>
      </div>

      <div
        style={{
          background: "linear-gradient(180deg, #f8fbff 0%, #f8fafc 100%)",
          border: "1px solid #e2e8f0",
          borderRadius: "20px",
          padding: "20px",
          marginBottom: "22px",
        }}
      >
        <div style={{ marginBottom: "18px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "700",
              color: "#334155",
              fontSize: "14px",
            }}
          >
            Patient ID
          </label>

          <input
            type="text"
            value={patientId}
            onChange={(e) => setPatientId(e.target.value)}
            placeholder="Enter patient ID (example: P001)"
            style={{
              width: "100%",
              padding: "13px 14px",
              borderRadius: "14px",
              border: "1px solid #cbd5e1",
              fontSize: "14px",
              backgroundColor: "#ffffff",
              color: "#0f172a",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
        </div>

        <div style={{ marginBottom: "18px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "700",
              color: "#334155",
              fontSize: "14px",
            }}
          >
            Query
          </label>

          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Example: Give a short summary of this patient"
            rows="5"
            style={{
              width: "100%",
              padding: "13px 14px",
              borderRadius: "14px",
              border: "1px solid #cbd5e1",
              fontSize: "14px",
              backgroundColor: "#ffffff",
              color: "#0f172a",
              outline: "none",
              resize: "vertical",
              boxSizing: "border-box",
            }}
          />
        </div>

        <div style={{ marginBottom: "18px" }}>
          <div
            style={{
              marginBottom: "10px",
              fontWeight: "700",
              color: "#334155",
              fontSize: "14px",
            }}
          >
            Quick Query Suggestions
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            {sampleQueries.map((item, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleSampleQuery(item)}
                style={{
                  padding: "10px 14px",
                  borderRadius: "999px",
                  border: "1px solid #dbeafe",
                  backgroundColor: "#eff6ff",
                  color: "#1d4ed8",
                  fontSize: "13px",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleGetSummary}
          disabled={loading}
          style={{
            padding: "13px 22px",
            border: "none",
            borderRadius: "14px",
            background: "linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)",
            color: "#ffffff",
            fontWeight: "700",
            fontSize: "14px",
            cursor: loading ? "not-allowed" : "pointer",
            opacity: loading ? 0.75 : 1,
            boxShadow: "0 12px 24px rgba(37, 99, 235, 0.18)",
          }}
        >
          {loading ? "Generating..." : "Get Summary"}
        </button>
      </div>

      <div
        style={{
          backgroundColor: "#f8fafc",
          border: "1px solid #e2e8f0",
          borderRadius: "20px",
          padding: "20px",
          marginBottom: sources ? "18px" : "0",
        }}
      >
        <h3
          style={{
            margin: "0 0 12px 0",
            color: "#0f172a",
            fontSize: "20px",
            fontWeight: "800",
          }}
        >
          AI Output
        </h3>

        <div
          style={{
            color: "#334155",
            lineHeight: "1.7",
            fontSize: "14px",
            overflowX: "auto",
          }}
          dangerouslySetInnerHTML={{ __html: output }}
        />
      </div>

      {sources && (
        <div
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid #e2e8f0",
            borderRadius: "20px",
            padding: "20px",
          }}
        >
          <h3
            style={{
              margin: "0 0 12px 0",
              color: "#0f172a",
              fontSize: "20px",
              fontWeight: "800",
            }}
          >
            Sources
          </h3>

          <div
            style={{
              color: "#334155",
              lineHeight: "1.6",
              fontSize: "14px",
            }}
            dangerouslySetInnerHTML={{ __html: sources }}
          />
        </div>
      )}
    </div>
  );
}

export default DoctorRagPage;