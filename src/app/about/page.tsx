import { siteConfig } from "@/site.config";

export default function AboutPage() {
  const { title, intro, story, mission, values } = siteConfig.about;

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {title}
          </h1>
          <p className="text-xl text-muted">
            {intro}
          </p>
        </div>

        {/* Story */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Our Story
          </h2>
          <p className="text-muted leading-relaxed">
            {story}
          </p>
        </div>

        {/* Mission */}
        <div className="mb-16 bg-primary/5 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Our Mission
          </h2>
          <p className="text-muted leading-relaxed">
            {mission}
          </p>
        </div>

        {/* Values */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Our Values
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((value, index) => (
              <li
                key={index}
                className="flex items-start gap-3 bg-white p-4 rounded-lg border border-gray-100"
              >
                <span className="text-primary text-xl">✓</span>
                <span className="text-foreground">{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
