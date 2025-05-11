import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center items-center text-center px-4 py-16 max-w-5xl mx-auto">
      <div className="mb-8">
        <svg
          width="80"
          height="80"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="RunRL Logo"
          viewBox="0 0 24 24"
          className="mx-auto"
        >
          <rect width="24" height="24" rx="4" fill="#4F46E5" />
          <path d="M7 7h4v4h-4z M13 7h4v4h-4z M7 13h4v4h-4z M13 13h4v4h-4z" fill="white" />
        </svg>
      </div>
      
      <h1 className="mb-4 text-5xl font-bold">RunRL</h1>
      <p className="text-xl mb-8 max-w-2xl text-fd-muted-foreground">
        Python client for interacting with the RunRL API, providing tools for training and deploying machine learning models.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 w-full max-w-2xl">
        <Link
          href="/docs/installation"
          className="p-6 border rounded-lg hover:border-primary hover:bg-primary/5 transition-colors"
        >
          <h2 className="text-xl font-semibold mb-2">Installation</h2>
          <p className="text-fd-muted-foreground">
            Learn how to install and set up the RunRL client.
          </p>
        </Link>
        
        <Link
          href="/docs/api-reference"
          className="p-6 border rounded-lg hover:border-primary hover:bg-primary/5 transition-colors"
        >
          <h2 className="text-xl font-semibold mb-2">API Reference</h2>
          <p className="text-fd-muted-foreground">
            Explore the complete API documentation.
          </p>
        </Link>
        
        <Link
          href="/docs/examples"
          className="p-6 border rounded-lg hover:border-primary hover:bg-primary/5 transition-colors"
        >
          <h2 className="text-xl font-semibold mb-2">Examples</h2>
          <p className="text-fd-muted-foreground">
            See practical examples of using RunRL.
          </p>
        </Link>
        
        <Link
          href="/docs/troubleshooting"
          className="p-6 border rounded-lg hover:border-primary hover:bg-primary/5 transition-colors"
        >
          <h2 className="text-xl font-semibold mb-2">Troubleshooting</h2>
          <p className="text-fd-muted-foreground">
            Find solutions to common issues.
          </p>
        </Link>
      </div>
      
      <div className="w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-4">Quick Start</h2>
        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg text-left overflow-x-auto">
          <pre className="language-python">
            <code>{`from runrl import RunRL

# Initialize with your API key
client = RunRL(api_key="rl-your-api-key")

# Upload prompt and reward files
prompt_file = client.upload_prompt_file("path/to/prompt.jsonl", "My Prompt File")
reward_file = client.upload_reward_file("path/to/reward.jsonl", "My Reward File")

# Launch a training run
run = client.create_run(
    model_name="Qwen/Qwen3-4B",
    prompt_file=prompt_file['id'],
    reward_file=reward_file['id'],
    epochs=2,
    learning_rate=2e-6
)
print(f"Created run with ID: {run['id']}")`}</code>
          </pre>
        </div>
        
        <div className="mt-8 text-center">
          <Link
            href="/docs"
            className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </main>
  );
}
