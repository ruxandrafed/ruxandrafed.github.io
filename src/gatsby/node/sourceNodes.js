module.exports = ({ actions }) => {
  actions.createTypes(`
    type WorkHistoryYaml implements Node {
      id: ID!
      company: String!
      period: String
      position: String
      url: String
    }

    type EducationCertificationsYaml implements Node {
      name: String
      period: String
      institution: String
      description: String
      url: String
      urlName: String
      image: File @fileByRelativePath
    }

    type ProjectsYaml implements Node {
      id: ID!
      description: String
      icon: String
      image: File @fileByRelativePath
      name: String!
      status: String
      tags: [String]
      url: String
    }

    type TestimonialsYaml implements Node {
      avatarAlt: String
      avatarUrl: String
      company: String!
      linkUrl: String
      name: String!
      quote: String!
    }
  `)
}
