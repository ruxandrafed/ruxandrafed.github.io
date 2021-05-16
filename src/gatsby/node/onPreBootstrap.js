const fs = require("fs")

module.exports = ({ reporter }, options) => {
  let contentPath = options.contentPath || "content/"

  if (!contentPath.endsWith("/")) {
    contentPath += "/"
  }

  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory with sample data`)
    fs.mkdirSync(contentPath)
    fs.mkdirSync(`${contentPath}images`)

    const filesToCopy = [
      "education-certifications.yaml",
      "profile.yaml",
      "projects.yaml",
      "social.yaml",
      "testimonials.yaml",
      "work-history.yaml",
      "images/aws-certified-solutions-architect-associate.png",
      "images/cka-certified-kubernetes-administrator.png",
      "images/cto-ai.png",
      "images/cto-ai-blog.png",
      "images/dailyhive.jpeg",
      "images/kubernetes.png",
      "images/my-telus.png",
      "images/profile.jpg",
      "images/project.jpg",
      "images/sei.png",
      "images/telus-home-shop.png",
      "images/uaic.jpg",
    ]

    filesToCopy.forEach(file =>
      fs.copyFileSync(
        `${__dirname}/../../../content/${file}`,
        `${contentPath}${file}`
      )
    )
  }
}
