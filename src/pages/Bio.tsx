export default function Bio() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2 dark:text-white">Uchenna Valentine Ukah</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        DevOps Engineer | Systems Thinker | Reliability-First Builder
      </p>

      {/* Profile Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-8 flex items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0">
            <span className="text-3xl font-bold text-white">UV</span>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              Uchenna Valentine Ukah
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-2">DevOps Engineer</p>
            <p className="text-sm text-gray-500 dark:text-gray-500">📍 Lagos, Nigeria</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-8">
          <h3 className="text-lg font-semibold mb-4 dark:text-white">Get In Touch</h3>
          <div className="space-y-3">
            <ContactLink
              icon="📧"
              label="Email"
              value="val.ukah01@gmail.com"
              href="mailto:val.ukah01@gmail.com"
            />
            <ContactLink
              icon="💼"
              label="LinkedIn"
              value="linkedin.com/in/uchenna-valentine-ukah-2869a37a/"
              href="https://linkedin.com/in/uchenna-valentine-ukah-2869a37a/"
            />
            <ContactLink
              icon="🐙"
              label="GitHub"
              value="github.com/Tinobrace"
              href="https://github.com/Tinobrace"
            />
            <ContactLink
              icon="🐦"
              label="Twitter"
              value="@thisisuche"
              href="https://twitter.com/thisisuche"
            />
          </div>
        </div>
      </div>

      {/* Career Biography */}
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-8 mb-6">
        <h2 className="text-xl font-semibold mb-5 dark:text-white">📖 Career Biography</h2>
        <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            Uchenna Valentine Ukah is a DevOps Engineer with a foundation forged in real-world
            systems support, operational accountability, and the unglamorous but essential work of
            keeping technology running when it matters most. His career is not the story of
            shortcuts or buzzwords, but of deliberate progression, from user-facing support to deep
            infrastructure ownership, and finally to modern DevOps and cloud-native engineering.
          </p>

          <p>
            His professional journey began in <strong className="text-gray-900 dark:text-white">End User Support</strong>,
            where technology is experienced at its most human level. In this role, Uchenna learned
            early that systems are only as good as the people who rely on them. Supporting users
            meant troubleshooting under pressure, translating technical failures into calm
            explanations, and developing a disciplined approach to root-cause analysis.
          </p>

          <p>
            As his curiosity deepened, Uchenna transitioned into
            <strong className="text-gray-900 dark:text-white"> Systems Administration</strong>. Here, the scope expanded
            from individual users to entire environments. He took responsibility for servers,
            operating systems, access control, backups, and service availability. This phase
            sharpened his understanding of Linux systems, networking fundamentals, and the
            consequences of misconfiguration.
          </p>

          <p>
            His evolution continued into the role of
            <strong className="text-gray-900 dark:text-white"> Application Lifecycle Management & Support Officer</strong>,
            a position that placed him at the intersection of software, operations, and business
            continuity. Supporting enterprise banking platforms such as <em className="text-indigo-600 dark:text-indigo-400">1xpress</em>, <em className="text-indigo-600 dark:text-indigo-400">IFRS9</em>, <em className="text-indigo-600 dark:text-indigo-400">Clirec Reconciliation App</em> and Enterprise Loan Applications such as: <em className="text-indigo-600 dark:text-indigo-400">Specta</em>, <em className="text-indigo-600 dark:text-indigo-400">Gazelle</em>, <em className="text-indigo-600 dark:text-indigo-400">Business Support Facility (BSF)</em>, and <em className="text-indigo-600 dark:text-indigo-400">The Business Hub (TBH)</em>, Uchenna operates as a <strong className="text-gray-900 dark:text-white">DevOps Engineer</strong>,
            applying years of operational experience to modern cloud and platform engineering. His
            work spans containerization with Docker, orchestration with Kubernetes, CI/CD pipelines
            using Jenkins and GitHub Actions, and cloud platforms including AWS, GCP, and Azure.
          </p>

          <p>
            Looking forward, Uchenna is on a deliberate path toward becoming a world-class DevSecOps
            Architect, designing resilient systems, mentoring emerging engineers, and building tools
            that enable teams rather than impress resumes.
          </p>

          <p className="italic text-gray-600 dark:text-gray-400 pt-4 border-t border-gray-200 dark:border-gray-700">
            This is not the story of someone who skipped steps. It is the story of someone who
            respected them.
          </p>
        </div>
      </div>

      {/* What I'm Working On */}
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-8 mb-6">
        <h2 className="text-xl font-semibold mb-4 dark:text-white">🚀 What I'm Working On</h2>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li className="flex items-start gap-2">
            <span className="text-indigo-500 dark:text-indigo-400 mt-1">•</span>
            <span>Building this personal DevOps dashboard (ThisIsUche)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-indigo-500 dark:text-indigo-400 mt-1">•</span>
            <span>Strengthening cloud, CI/CD, and container skills</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-indigo-500 dark:text-indigo-400 mt-1">•</span>
            <span>Documenting projects and lessons learned in public</span>
          </li>
        </ul>
      </div>

      {/* Where I'm Headed */}
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-8 mb-6">
        <h2 className="text-xl font-semibold mb-4 dark:text-white">🎯 Where I'm Headed</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          My long-term goal is to become a world-class DevSecOps architect, working on high-impact
          systems, mentoring upcoming engineers, and building tools that outlive trends.
        </p>
      </div>

      {/* Skills & Expertise */}
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-8 mb-6">
        <h2 className="text-xl font-semibold mb-5 dark:text-white">🛠️ Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCategory
            title="Cloud Platforms"
            skills={["AWS (EC2, S3, Lambda)", "Google Cloud Platform", "Microsoft Azure"]}
          />
          <SkillCategory
            title="Containerization & Orchestration"
            skills={["Docker", "Docker Compose", "Kubernetes"]}
          />
          <SkillCategory
            title="CI/CD & Automation"
            skills={["GitHub Actions", "Jenkins", "GitLab CI", "AWS CodeDeploy"]}
          />
          <SkillCategory
            title="Infrastructure as Code"
            skills={["Terraform", "Ansible", "CloudFormation"]}
          />
          <SkillCategory
            title="Programming & Scripting"
            skills={["Bash", "Python", "Node.js"]}
          />
          <SkillCategory
            title="Monitoring & Observability"
            skills={["Prometheus", "Grafana", "CloudWatch", "ELK Stack"]}
          />
        </div>
      </div>

      {/* Download Resume */}
      <div className="text-center">
        <button className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition">
          📄 Download Resume
        </button>
      </div>
    </div>
  );
}

// Contact Link Component
interface ContactLinkProps {
  icon: string;
  label: string;
  value: string;
  href: string;
}

function ContactLink({ icon, label, value, href }: ContactLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
    >
      <span className="text-xl">{icon}</span>
      <div className="flex-1">
        <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">{label}</div>
        <div className="text-sm text-gray-700 dark:text-gray-300">{value}</div>
      </div>
    </a>
  );
}

// Skill Category Component
interface SkillCategoryProps {
  title: string;
  skills: string[];
}

function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div className="p-5 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700">
      <h3 className="font-semibold text-gray-900 dark:text-white mb-3">{title}</h3>
      <ul className="space-y-1.5">
        {skills.map((skill) => (
          <li key={skill} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
            <span className="text-indigo-500 dark:text-indigo-400 mt-0.5">•</span>
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}