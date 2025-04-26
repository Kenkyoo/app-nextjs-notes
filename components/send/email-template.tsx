import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div
    style={{
      fontFamily: "Arial, sans-serif",
      lineHeight: "1.6",
      padding: "20px",
      backgroundColor: "#f4f4f4",
    }}
  >
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        backgroundColor: "#ffffff",
        padding: "30px",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <h1 style={{ color: "#333333" }}>Hola {firstName},</h1>
      <p style={{ fontSize: "16px", color: "#555555" }}>
        ¡Gracias por probar <strong>Next Notes</strong>!
      </p>
      <p style={{ fontSize: "16px", color: "#555555" }}>
        Esta es una aplicación de notas rápidas construida con tecnologías
        modernas como Next.js, Prisma, TailwindCSS y más.
      </p>
      <p style={{ fontSize: "16px", color: "#555555" }}>
        Tu apoyo significa mucho. Si te gustó el proyecto, ¡no dudes en
        contactarme o dejar feedback!
      </p>
      <hr
        style={{
          margin: "30px 0",
          border: "none",
          borderTop: "1px solid #dddddd",
        }}
      />
      <p style={{ fontSize: "14px", color: "#999999" }}>
        Este correo fue enviado automáticamente como parte de una demostración
        técnica.
      </p>
      <h4>F.F.</h4>
    </div>
  </div>
);

export default EmailTemplate;
