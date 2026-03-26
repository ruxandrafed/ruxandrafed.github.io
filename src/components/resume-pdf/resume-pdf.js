import React from "react"
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
  Font,
  Svg,
  Path,
} from "@react-pdf/renderer"

Font.register({
  family: "Lato",
  fonts: [
    { src: "/fonts/lato-regular.woff", fontWeight: 400 },
    { src: "/fonts/lato-bold.woff", fontWeight: 700 },
    { src: "/fonts/lato-italic.woff", fontWeight: 400, fontStyle: "italic" },
  ],
})

const GREEN = "#059669"
const DARK = "#1c2b22"
const MUTED = "#6b7280"
const LIGHT_BG = "#f2f5f3"
const BORDER = "#c8d8cf"

const styles = StyleSheet.create({
  page: {
    fontFamily: "Lato",
    fontSize: 9,
    color: DARK,
    paddingTop: 32,
    paddingBottom: 32,
    paddingHorizontal: 40,
    backgroundColor: "#ffffff",
  },
  // Header
  header: {
    marginBottom: 14,
    borderBottomWidth: 1.5,
    borderBottomColor: GREEN,
    paddingBottom: 10,
  },
  name: {
    fontSize: 20,
    fontFamily: "Lato",
    fontWeight: 700,
    color: DARK,
    marginBottom: 2,
  },
  profession: {
    fontSize: 10,
    color: GREEN,
    fontFamily: "Lato",
    fontWeight: 700,
    marginBottom: 5,
  },
  headerMeta: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 3,
  },
  metaItem: {
    fontSize: 7.5,
    color: MUTED,
  },
  metaLink: {
    fontSize: 7.5,
    color: GREEN,
    textDecoration: "none",
  },
  // Section
  section: {
    marginBottom: 12,
  },
  sectionHeading: {
    fontSize: 6.5,
    fontFamily: "Lato",
    fontWeight: 700,
    color: GREEN,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 5,
    paddingBottom: 3,
    borderBottomWidth: 1,
    borderBottomColor: BORDER,
  },
  // About
  aboutText: {
    fontSize: 8,
    lineHeight: 1.55,
    color: DARK,
  },
  // Skills
  skillsWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 3,
  },
  skillPill: {
    backgroundColor: LIGHT_BG,
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 2,
    fontSize: 7,
    color: DARK,
  },
  highlightDot: {
    width: 4,
    height: 4,
    borderRadius: 4,
    backgroundColor: GREEN,
    marginTop: 2.5,
  },
  highlightText: {
    fontSize: 7.5,
    color: DARK,
    flex: 1,
  },
  // Work history
  workEntry: {
    marginBottom: 9,
  },
  workHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 1,
  },
  workRole: {
    fontSize: 8.5,
    fontFamily: "Lato",
    fontWeight: 700,
    color: DARK,
    flex: 1,
  },
  workPeriod: {
    fontSize: 7,
    color: MUTED,
    textAlign: "right",
  },
  workCompany: {
    fontSize: 7.5,
    color: GREEN,
    marginBottom: 3,
  },
  workDesc: {
    fontSize: 7.5,
    lineHeight: 1.5,
    color: "#374151",
  },
  volunteerBadge: {
    fontSize: 6.5,
    color: GREEN,
    borderWidth: 1,
    borderColor: GREEN,
    borderRadius: 8,
    paddingHorizontal: 5,
    paddingVertical: 1.5,
    marginLeft: 6,
    alignSelf: "center",
  },
  // Education
  eduEntry: {
    marginBottom: 10,
  },
  eduName: {
    fontSize: 8.5,
    fontFamily: "Lato",
    fontWeight: 700,
    color: DARK,
    marginBottom: 1,
  },
  eduInstitution: {
    fontSize: 8,
    color: GREEN,
    marginBottom: 1,
  },
  eduPeriod: {
    fontSize: 7.5,
    color: MUTED,
  },
})

const LinkedInIcon = ({ size = 10, color = GREEN }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size}>
    <Path fill={color} d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </Svg>
)

const GitHubIcon = ({ size = 10, color = DARK }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size}>
    <Path fill={color} d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </Svg>
)

const parseDescription = description => {
  if (!description) return { intro: null, bullets: [] }
  const lines = description.split("\n")
  const introLines = []
  const bullets = []
  for (const line of lines) {
    if (line.trim().startsWith("►")) {
      bullets.push(line.replace("►", "").trim())
    } else if (!line.trim().startsWith("►") && bullets.length === 0) {
      introLines.push(line)
    }
  }
  const intro = introLines.join("\n").trim() || null
  return { intro, bullets }
}

const ResumePDF = ({ profile, history, educationCertifications, social }) => {
  const linkedIn = social?.find(s => s.name === "linkedin")?.url
  const github = social?.find(s => s.name === "github")?.url

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{profile.name}</Text>
          <Text style={styles.profession}>
            {profile.profession?.replace(/\n/g, " ").trim()}
          </Text>
          <View style={styles.headerMeta}>
            {profile.location && (
              <Text style={styles.metaItem}>{profile.location}</Text>
            )}
            {linkedIn && (
              <Link src={linkedIn} style={[styles.metaLink, { flexDirection: "row", alignItems: "center", gap: 3 }]}>
                <LinkedInIcon size={8} color={GREEN} />
                <Text>{linkedIn.replace("https://www.linkedin.com/in/", "linkedin.com/in/")}</Text>
              </Link>
            )}
            {github && (
              <Link src={github} style={[styles.metaLink, { flexDirection: "row", alignItems: "center", gap: 3 }]}>
                <GitHubIcon size={8} color={GREEN} />
                <Text>{github.replace("https://", "")}</Text>
              </Link>
            )}
          </View>
        </View>

        {/* About */}
        {profile.about && (
          <View style={styles.section}>
            <Text style={styles.sectionHeading}>About</Text>
            <Text style={styles.aboutText}>{profile.about.trim()}</Text>
          </View>
        )}

        {/* Skills — compact inline row */}
        {profile.skills?.length > 0 && (
          <View style={[styles.section, { marginBottom: 10 }]}>
            <Text style={styles.sectionHeading}>Skills</Text>
            <View style={styles.skillsWrap}>
              {profile.skills.map(skill => (
                <Text key={skill} style={styles.skillPill}>{skill}</Text>
              ))}
            </View>
          </View>
        )}

        {/* Work History */}
        {history?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionHeading}>Experience</Text>
            {history.map((job, i) => {
              const { intro, bullets } = parseDescription(job.description)
              return (
                <View key={i} style={styles.workEntry} wrap={false}>
                  <View style={styles.workHeader}>
                    <View style={{ flexDirection: "row", flex: 1 }}>
                      <Text style={styles.workRole}>{job.position}</Text>
                    </View>
                    {job.period && (
                      <Text style={styles.workPeriod}>{job.period}</Text>
                    )}
                  </View>
                  <Text style={styles.workCompany}>{job.company}</Text>
                  {intro && (
                    <Text style={[styles.workDesc, { marginBottom: bullets.length > 0 ? 3 : 0 }]}>
                      {intro}
                    </Text>
                  )}
                  {bullets.slice(0, 4).map((b, bi) => (
                    <View key={bi} style={{ flexDirection: "row", marginBottom: 2, gap: 5 }}>
                      <Text style={{ color: GREEN, fontSize: 8 }}>·</Text>
                      <Text style={styles.workDesc}>{b}</Text>
                    </View>
                  ))}
                </View>
              )
            })}
          </View>
        )}

        {/* Certifications with Credly links */}
        {educationCertifications?.some(e => e.url?.includes("credly")) && (
          <View style={styles.section}>
            <Text style={styles.sectionHeading}>Certifications</Text>
            {educationCertifications
              .filter(e => e.url?.includes("credly"))
              .reduce((rows, cert, i) => {
                if (i % 2 === 0) rows.push([])
                rows[rows.length - 1].push(cert)
                return rows
              }, [])
              .map((row, ri) => (
                <View key={ri} style={{ flexDirection: "row", gap: 12, marginBottom: 5 }}>
                  {row.map((cert, i) => (
                    <View key={i} style={{ flex: 1 }}>
                      <Link src={cert.url} style={[styles.eduName, { color: DARK, textDecoration: "underline" }]}>
                        {cert.name}
                      </Link>
                      <Text style={styles.eduInstitution}>{cert.institution?.replace(/\n/g, " ").trim()}</Text>
                      {cert.period && <Text style={styles.eduPeriod}>{cert.period}</Text>}
                    </View>
                  ))}
                </View>
              ))}
          </View>
        )}

        {/* Education */}
        {educationCertifications?.some(e => !e.url?.includes("credly")) && (
          <View style={styles.section}>
            <Text style={styles.sectionHeading}>Education</Text>
            {educationCertifications
              .filter(e => !e.url?.includes("credly"))
              .map((edu, i) => (
                <View key={i} style={styles.eduEntry}>
                  <Text style={styles.eduName}>{edu.name}</Text>
                  <Text style={styles.eduInstitution}>{edu.institution?.replace(/\n/g, " ").trim()}</Text>
                  {edu.period && (
                    <Text style={styles.eduPeriod}>{edu.period}</Text>
                  )}
                </View>
              ))}
          </View>
        )}
      </Page>
    </Document>
  )
}

export default ResumePDF
