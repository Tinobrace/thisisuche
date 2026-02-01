const Projects = () => {
  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>

      <div className="space-y-6">
        <div>
          <h2 className="font-semibold">Completed</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>CRUD App Deployment (Docker + CI/CD)</li>
            <li>Kubernetes Training Projects</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold">In Progress</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>ThisIsUche Personal Platform</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
