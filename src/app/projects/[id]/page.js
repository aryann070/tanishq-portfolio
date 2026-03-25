

export default function ProjectDetail({ params }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <section className="px-6 py-16">
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p className="mt-4 text-gray-600">{project.description}</p>
    </section>
  );
}