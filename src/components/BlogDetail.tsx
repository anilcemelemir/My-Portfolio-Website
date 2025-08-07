import React, { useLayoutEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Tag } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  author: string;
  tags: string[];
}

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  // Blog yazıları verisi (gerçek uygulamada API'den gelecek)
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "A Comprehensive Beginner’s Guide to Building React Applications with TypeScript",
      excerpt: "Learn what TypeScript is, why it pairs perfectly with React, and how to create your first fully typed React application from scratch.",
      content: `
    <h2>A Comprehensive Beginner’s Guide to Building React Applications with TypeScript</h2>
    <p>If you’re new to web development or just starting to explore React and TypeScript, this guide will give you a solid foundation. We’ll cover what React and TypeScript are, why they’re often used together, and walk through examples to build your first typed React components.</p>

    <h3>What is React?</h3>
    <p>React is a JavaScript library developed by Facebook for building user interfaces, particularly single-page applications where you want fast and dynamic updates without reloading the page. React achieves this by breaking the UI into reusable <strong>components</strong>, which manage their own state and can be combined to build complex UIs.</p>
    <p>Example: A simple React component looks like this:</p>
    <pre><code>
function HelloWorld() {
  return &lt;h1&gt;Hello, World!&lt;/h1&gt;;
}
    </code></pre>

    <h3>What is TypeScript?</h3>
    <p>TypeScript is a superset of JavaScript, meaning any valid JavaScript code is valid TypeScript code, but TypeScript adds static typing and other features. Static typing means you specify types for variables, function parameters, and return values. This helps catch errors at compile-time rather than runtime.</p>
    <p>For example, this TypeScript code will show an error if you try to assign a string to a variable declared as a number:</p>
    <pre><code>
let age: number = 25;
age = "thirty"; // Error: Type 'string' is not assignable to type 'number'
    </code></pre>

    <h3>Why Use TypeScript with React?</h3>
    <ul>
      <li><strong>Catch bugs early:</strong> Type errors and mismatches are caught before running the app.</li>
      <li><strong>Improved developer experience:</strong> Autocomplete and intelligent code navigation in editors like VS Code.</li>
      <li><strong>Clearer documentation:</strong> Types serve as documentation that helps you and your team understand code quickly.</li>
      <li><strong>Better maintainability:</strong> Easier to refactor and extend your codebase safely.</li>
    </ul>

    <h3>Setting Up Your React + TypeScript Project</h3>
    <p>Start a new React project with TypeScript by running:</p>
    <pre><code>npx create-react-app my-app --template typescript</code></pre>
    <p>This generates a boilerplate React project preconfigured with TypeScript. Your files will have the extension <code>.tsx</code> (TypeScript + JSX).</p>

    <h3>Understanding Basic TypeScript Types</h3>
    <p>Here are some common TypeScript types you’ll use in React projects:</p>
    <ul>
      <li><code>string</code> — text data</li>
      <li><code>number</code> — numeric data</li>
      <li><code>boolean</code> — true/false values</li>
      <li><code>Array&lt;T&gt;</code> — array of elements of type T</li>
      <li><code>any</code> — disables type checking (avoid if possible)</li>
      <li><code>void</code> — usually used for functions that return nothing</li>
      <li><code>unknown</code> — safer alternative to <code>any</code>, requires explicit checks before use</li>
    </ul>

    <h3>Typing Props in Functional Components</h3>
    <p>Props are inputs passed from parent to child components. Defining types for props improves component reusability and safety.</p>
    <pre><code>
interface UserCardProps {
  name: string;
  age?: number; // Optional prop
}

const UserCard: React.FC&lt;UserCardProps&gt; = ({ name, age }) =&gt; {
  return (
    &lt;div&gt;
      &lt;h2&gt;User: {name}&lt;/h2&gt;
      {age ? &lt;p&gt;Age: {age}&lt;/p&gt; : &lt;p&gt;Age not specified&lt;/p&gt;}
    &lt;/div&gt;
  );
};
    </code></pre>

    <h3>State Management with Hooks and TypeScript</h3>
    <p>React Hooks let you add state and lifecycle methods in functional components. Here’s how you use <code>useState</code> with explicit types:</p>
    <pre><code>
const [count, setCount] = React.useState&lt;number&gt;(0);

function increment() {
  setCount(prevCount =&gt; prevCount + 1);
}
    </code></pre>
    <p>TypeScript infers the type from the initial value, but specifying it explicitly helps avoid mistakes, especially with more complex states.</p>

    <h3>Handling Events with TypeScript</h3>
    <p>React events have their own types that help you write safer handlers. For example, typing an input’s change event:</p>
    <pre><code>
const handleChange = (event: React.ChangeEvent&lt;HTMLInputElement&gt;) =&gt; {
  console.log(event.target.value);
};
    </code></pre>

    <h3>Using Interfaces vs Types</h3>
    <p>Both <code>interface</code> and <code>type</code> keywords can define object shapes. Interfaces can be extended, while types are more flexible and can describe unions or intersections.</p>
    <pre><code>
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

type Cat = {
  name: string;
} & { age: number };
    </code></pre>

    <h3>TypeScript Utility Types in React</h3>
    <p>TypeScript provides useful utility types:</p>
    <ul>
      <li><code>Partial&lt;T&gt;</code>: Makes all properties of T optional.</li>
      <li><code>Pick&lt;T, K&gt;</code>: Selects a subset K of keys from T.</li>
      <li><code>Omit&lt;T, K&gt;</code>: Excludes keys K from T.</li>
    </ul>

    <h3>Organizing Your Project</h3>
    <p>Best practices for larger projects:</p>
    <ul>
      <li>Keep components small and focused.</li>
      <li>Use folders to separate UI components, hooks, utilities, and types.</li>
      <li>Write reusable types and interfaces in a dedicated <code>types/</code> folder.</li>
      <li>Leverage code splitting and lazy loading for better performance.</li>
    </ul>

    <h3>Conclusion</h3>
    <p>Combining React with TypeScript gives you a powerful toolkit for building reliable, maintainable web apps. Though there is a learning curve, the investment pays off by catching bugs early, improving code clarity, and enhancing the developer experience.</p>
    <p>Start by experimenting with small components, gradually add types, and use the rich TypeScript ecosystem to grow your skills. Happy coding!</p>
  `,
      date: "2025-08-07",
      readTime: "12 min to read",
      category: "React & TypeScript",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200",
      author: "Anıl Cem Elemir",
      tags: ["React", "TypeScript", "JavaScript", "Frontend Development", "Web Development"]
    },
    {
      id: 2,
      title: ".NET Core AI Integration: A Beginner’s Guide to ML.NET and Practical Machine Learning",
      excerpt: "Learn how to harness the power of AI in your .NET Core apps using ML.NET, Microsoft’s open-source machine learning framework. Step-by-step from concepts to code.",
      content: `
    <h2>.NET Core AI Integration: A Beginner’s Guide to ML.NET and Practical Machine Learning</h2>

    <p>Artificial Intelligence (AI) has become a critical technology across many industries, enabling smarter apps and data-driven decisions. For .NET developers, integrating AI used to require learning new languages like Python or using external tools. Today, <strong>ML.NET</strong> empowers .NET Core developers to build, train, and deploy machine learning models right within their familiar C# ecosystem.</p>

    <h3>What is Machine Learning and Neural Networks?</h3>
    <p>Machine Learning (ML) is a subset of AI focused on building systems that learn patterns from data and make predictions or decisions without explicit programming. For example, predicting customer churn, recognizing images, or filtering spam emails.</p>
    <p><strong>Neural networks</strong> are a popular type of ML model inspired by how the human brain works. They consist of layers of interconnected “neurons” that transform input data through mathematical functions to learn complex patterns.</p>
    <p>Key components of neural networks include:</p>
    <ul>
      <li><strong>Input layer:</strong> Takes the raw data (e.g., images, numbers).</li>
      <li><strong>Hidden layers:</strong> Perform transformations and extract features using weighted connections.</li>
      <li><strong>Activation functions:</strong> Non-linear functions like ReLU or Sigmoid applied at each neuron to introduce non-linearity, allowing the network to learn complex relationships.</li>
      <li><strong>Output layer:</strong> Produces the final prediction or classification.</li>
    </ul>

    <h3>How Does ML.NET Help?</h3>
    <p><strong>ML.NET</strong> is an open-source machine learning framework developed by Microsoft for .NET developers. It allows you to:</p>
    <ul>
      <li>Build ML models using C# or F# without switching to Python or R.</li>
      <li>Perform various ML tasks: classification, regression, clustering, anomaly detection, recommendation, and even some neural network models.</li>
      <li>Integrate ML models directly into your .NET Core applications for scalable and production-ready AI.</li>
    </ul>

    <h3>Step-by-Step: Building a Simple ML Model in .NET Core with ML.NET</h3>

    <h4>1. Define Your Data Schema</h4>
    <p>Machine learning models learn from labeled data. Define a C# class representing your data:</p>
    <pre><code class="language-csharp">
    public class CustomerData
    {
      public float Age { get; set; }
      public float AccountBalance { get; set; }
      public bool HasCreditCard { get; set; }
      public bool IsActiveMember { get; set; }
      public bool Exited { get; set; } // Label: true if customer churned
    }
    </code></pre>

    <h4>2. Initialize ML Context and Load Data</h4>
    <p>The MLContext object is the entry point for ML.NET operations:</p>
    <pre><code class="language-csharp">
    var mlContext = new MLContext();

    IDataView data = mlContext.Data.LoadFromTextFile<CustomerData>("customer_data.csv", hasHeader: true, separatorChar: ',');
    </code></pre>

    <h4>3. Data Preprocessing Pipeline</h4>
    <p>Transform and prepare your data for the ML algorithm. For example, concatenate feature columns and normalize values:</p>
    <pre><code class="language-csharp">
    var dataProcessPipeline = mlContext.Transforms.Concatenate("Features", "Age", "AccountBalance", "HasCreditCard", "IsActiveMember")
                        .Append(mlContext.Transforms.NormalizeMinMax("Features"));
    </code></pre>

    <h4>4. Choose and Train a Model</h4>
    <p>For binary classification (predict yes/no), use logistic regression or similar:</p>
    <pre><code class="language-csharp">
    var trainer = mlContext.BinaryClassification.Trainers.LbfgsLogisticRegression(labelColumnName: "Exited", featureColumnName: "Features");

    var trainingPipeline = dataProcessPipeline.Append(trainer);

    var model = trainingPipeline.Fit(data);
    </code></pre>

    <h4>5. Evaluate the Model</h4>
    <p>Split data into training and test sets, then check model accuracy:</p>
    <pre><code class="language-csharp">
    var split = mlContext.Data.TrainTestSplit(data, testFraction: 0.2);
    var trainedModel = trainingPipeline.Fit(split.TrainSet);
    var predictions = trainedModel.Transform(split.TestSet);
    var metrics = mlContext.BinaryClassification.Evaluate(predictions, labelColumnName: "Exited");

    Console.WriteLine($"Accuracy: {metrics.Accuracy:P2}");
    Console.WriteLine($"AUC: {metrics.AreaUnderRocCurve:P2}");
    Console.WriteLine($"F1 Score: {metrics.F1Score:P2}");
    </code></pre>

    <h4>6. Use the Model for Predictions</h4>
    <p>Create a prediction engine and run it on new data:</p>
    <pre><code class="language-csharp">
    var predEngine = mlContext.Model.CreatePredictionEngine<CustomerData, CustomerPrediction>(trainedModel);

    var newCustomer = new CustomerData { Age = 29, AccountBalance = 40000, HasCreditCard = true, IsActiveMember = true };
    var prediction = predEngine.Predict(newCustomer);

    Console.WriteLine($"Customer churn prediction: {(prediction.Prediction ? "Yes" : "No")}");
    </code></pre>

    <h3>Using Neural Networks in ML.NET</h3>
    <p>While ML.NET supports classic ML algorithms out-of-the-box, it also integrates with <strong>TensorFlow</strong> and <strong>ONNX</strong> models, enabling you to use deep learning neural networks trained in Python or other frameworks directly within .NET applications.</p>
    <p>For example, you can:</p>
    <ul>
      <li>Load pre-trained TensorFlow image classifiers.</li>
      <li>Score ONNX models for tasks like object detection or natural language processing.</li>
    </ul>
    <p>This hybrid approach lets you leverage state-of-the-art neural network models without rewriting them in C#.</p>

    <h3>Advanced AI with Azure Cognitive Services</h3>
    <p>If building and training ML models is not your focus, Microsoft Azure offers <strong>Cognitive Services</strong> — a suite of pre-built AI APIs accessible via REST that you can call from .NET Core applications:</p>
    <ul>
      <li>Vision (image recognition, OCR)</li>
      <li>Speech (speech-to-text, translation)</li>
      <li>Language (sentiment analysis, entity recognition)</li>
      <li>Decision (personalization, anomaly detection)</li>
    </ul>
    <p>This approach allows quick AI integration with minimal machine learning knowledge.</p>

    <h3>Conclusion</h3>
    <p>AI integration in .NET Core is practical and accessible thanks to ML.NET and Azure Cognitive Services. Beginners can start by creating simple ML models in familiar C#, while advanced users can incorporate powerful neural networks and cloud AI services. This expands the possibilities for building intelligent, data-driven applications without leaving the .NET ecosystem.</p>
  `,
      date: "2025-08-07",
      readTime: "11 min to read",
      category: "AI & Machine Learning",
      image: "https://images.pexels.com/photos/5473956/pexels-photo-5473956.jpeg?auto=compress&cs=tinysrgb&w=1200",
      author: "Anıl Cem Elemir",
      tags: ["ML.NET", ".NET Core", "Machine Learning", "Neural Networks", "Azure Cognitive Services", "Artificial Intelligence"]
    },
    {
      id: 3,
      title: "Building Neural Networks from Scratch in Python: A Practical Guide",
      excerpt: "Learn how neural networks work under the hood, understand key concepts like neurons, layers, and activation functions, and build your own simple neural network using Python and NumPy before exploring PyTorch implementations.",
      content: `
    <h2>What is a Neural Network?</h2>
    <p>A neural network is a computational model inspired by the human brain. It consists of layers of nodes called neurons, which are connected through weighted edges. These networks are capable of learning patterns from data and making predictions or decisions based on input.</p>
    
    <h3>Basic Terminology and Concepts</h3>
    <ul>
      <li><strong>Neuron:</strong> The fundamental unit of a neural network. It receives inputs, processes them by applying weights, adds a bias, and then passes the result through an activation function.</li>
      <li><strong>Layers:</strong> 
        <ul>
          <li><em>Input layer:</em> The first layer that takes the raw data features.</li>
          <li><em>Hidden layers:</em> Intermediate layers that perform feature extraction and transformation.</li>
          <li><em>Output layer:</em> Produces the final output, such as classification probabilities or regression values.</li>
        </ul>
      </li>
      <li><strong>Weights:</strong> Parameters that scale the input signals. These are learned during training to minimize prediction errors.</li>
      <li><strong>Bias:</strong> An additional parameter added to the weighted sum, allowing the activation function to be shifted.</li>
      <li><strong>Activation Function:</strong> A nonlinear function applied to the neuron's input to introduce non-linearity, enabling the network to model complex relationships. Common examples include:</li>
      <ul>
        <li><strong>Sigmoid:</strong> Outputs values between 0 and 1, useful for binary classification.</li>
        <li><strong>ReLU (Rectified Linear Unit):</strong> Outputs zero if input is negative, otherwise outputs input itself, speeding up training for deep networks.</li>
        <li><strong>Tanh:</strong> Outputs values between -1 and 1, centered at zero.</li>
      </ul>
      <li><strong>Forward Propagation:</strong> The process of passing inputs through the network to obtain an output.</li>
      <li><strong>Backpropagation:</strong> The algorithm to calculate gradients of the loss function with respect to weights, used to update weights and improve the model.</li>
    </ul>

    <h2>Building a Simple Neural Network from Scratch in Python</h2>
    <p>Let's create a small neural network to solve the XOR problem, a classic example where simple linear models fail but neural networks succeed.</p>

    <h3>Step 1: Prepare Dataset</h3>
    <pre><code>import numpy as np

X = np.array([[0, 0],
              [0, 1],
              [1, 0],
              [1, 1]])
y = np.array([[0], [1], [1], [0]])</code></pre>

    <h3>Step 2: Define Activation Functions</h3>
    <p>We use the sigmoid function, which maps inputs into a range between 0 and 1. Its derivative is used for backpropagation.</p>
    <pre><code>def sigmoid(x):
    return 1 / (1 + np.exp(-x))

def sigmoid_derivative(x):
    return x * (1 - x)</code></pre>

    <h3>Step 3: Initialize Network Parameters</h3>
    <p>Weights are randomly initialized to small values. Biases can be integrated into weights by adding an extra input of 1.</p>
    <pre><code>np.random.seed(1)
input_size = 2
hidden_size = 2
output_size = 1

W1 = np.random.uniform(-1, 1, (input_size, hidden_size))
W2 = np.random.uniform(-1, 1, (hidden_size, output_size))</code></pre>

    <h3>Step 4: Train the Network with Forward and Backward Propagation</h3>
    <p>The training loop repeatedly passes inputs forward, computes errors, backpropagates gradients, and updates weights.</p>
    <pre><code>for epoch in range(10000):
    # Forward propagation
    layer0 = X
    layer1 = sigmoid(np.dot(layer0, W1))
    layer2 = sigmoid(np.dot(layer1, W2))

    # Error computation
    layer2_error = y - layer2
    if epoch % 1000 == 0:
        print(f"Epoch {epoch}, Error: {np.mean(np.abs(layer2_error)):.4f}")

    # Backpropagation
    layer2_delta = layer2_error * sigmoid_derivative(layer2)
    layer1_error = layer2_delta.dot(W2.T)
    layer1_delta = layer1_error * sigmoid_derivative(layer1)

    # Weight updates
    W2 += layer1.T.dot(layer2_delta)
    W1 += layer0.T.dot(layer1_delta)</code></pre>

    <h3>Step 5: Testing the Network</h3>
    <pre><code>output = sigmoid(np.dot(sigmoid(np.dot(X, W1)), W2))
print("Predictions after training:")
print(output.round(3))</code></pre>

    <h2>Leveraging PyTorch for Easier and Scalable Neural Networks</h2>
    <p>Manual implementation is educational but impractical for larger models. PyTorch offers high-level APIs and automatic differentiation, accelerating development.</p>
    <pre><code>import torch
import torch.nn as nn

model = nn.Sequential(
    nn.Linear(2, 2),
    nn.Sigmoid(),
    nn.Linear(2, 1),
    nn.Sigmoid()
)

criterion = nn.MSELoss()
optimizer = torch.optim.SGD(model.parameters(), lr=0.1)

X_torch = torch.tensor(X, dtype=torch.float32)
y_torch = torch.tensor(y, dtype=torch.float32)

for epoch in range(10000):
    optimizer.zero_grad()
    outputs = model(X_torch)
    loss = criterion(outputs, y_torch)
    loss.backward()
    optimizer.step()
    if epoch % 1000 == 0:
        print(f"Epoch {epoch}, Loss: {loss.item():.4f}")

print("PyTorch predictions:")
print(outputs.detach().round(3))</code></pre>

    <h2>Summary</h2>
    <p>This guide explained the core building blocks of neural networks, including neurons, layers, weights, biases, and activation functions. We demonstrated how to implement a simple network from scratch using Python and NumPy and then transitioned to a more practical approach using PyTorch.</p>
    <p>Understanding these fundamentals is essential for building, troubleshooting, and improving machine learning models.</p>
  `,
      date: "2025-08-07",
      readTime: "12 min to read",
      category: "Artificial Intelligence",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Anıl Cem Elemir",
      tags: ["Neural Networks", "Python", "Deep Learning", "Machine Learning", "PyTorch"]
    },
    {
      id: 4,
      title: "ASP.NET Core 2025: Key Innovations Every Developer Should Know",
      excerpt: "Discover the groundbreaking enhancements in ASP.NET Core 2025—from Native AOT and Blazor Hybrid to built-in GraphQL and advanced tooling—for faster, more secure, and cloud-ready apps.",
      content: `
    <h2>ASP.NET Core 2025: Key Innovations Every Developer Should Know</h2>
    <p>ASP.NET Core has long been at the heart of modern enterprise web development, and with the 2025 release, Microsoft further solidifies its commitment to performance, scalability, and developer productivity. This release marks a significant step toward cloud-native application architecture, secure-by-default APIs, and seamless full-stack development workflows. Whether you're building large-scale SaaS platforms, internal enterprise portals, or microservices-based APIs, ASP.NET Core 2025 provides tools and frameworks that empower developers to deliver better software—faster.</p>

    <h3>1. Native AOT (Ahead-of-Time) Compilation</h3>
    <p>One of the standout features of ASP.NET Core 2025 is its official support for <strong>Native Ahead-of-Time (AOT)</strong> compilation. This technique compiles your application into a platform-specific, fully native binary at publish time, bypassing the need for the JIT (Just-In-Time) compiler at runtime. As a result, applications start up dramatically faster and consume significantly less memory—critical advantages in serverless environments and microservice deployments.</p>
    <p>Use cases where Native AOT shines include:</p>
    <ul>
      <li><strong>Cold-start-sensitive services</strong> like Azure Functions or AWS Lambda.</li>
      <li><strong>Containerized workloads</strong> with strict memory and CPU quotas.</li>
      <li><strong>Edge computing</strong> where lightweight deployment is essential.</li>
    </ul>
    <p>The integration is made easier through the <code>PublishAot</code> property in .csproj, and the tooling pipeline now provides warnings if unsupported libraries are referenced—helping ensure stability at compile-time.</p>

    <h3>2. Blazor Hybrid Components & Full-Stack Unification</h3>
    <p>Blazor continues to evolve with <strong>Hybrid Components</strong>, a new capability allowing developers to write shared Razor components that work seamlessly across web, desktop (via .NET MAUI), and mobile. This dramatically reduces the friction of cross-platform development. A single UI codebase can now power:</p>
    <ul>
      <li>A responsive web application (Blazor Server or WASM)</li>
      <li>A desktop application using .NET MAUI</li>
      <li>A mobile app for Android and iOS—without rewriting logic or layout</li>
    </ul>
    <p>This full-stack unification aligns with the industry’s growing demand for rapid prototyping and faster MVP cycles, especially in startups and product teams.</p>

    <h3>3. Built-in GraphQL Server Integration</h3>
    <p>Modern API development increasingly embraces <strong>GraphQL</strong> for its flexible, query-driven approach to data fetching. ASP.NET Core 2025 introduces native support for GraphQL endpoints, including:</p>
    <ul>
      <li>Built-in schema generation via reflection</li>
      <li>Intelligent query validation and optimization</li>
      <li>Integration with identity/auth policies and role-based data shaping</li>
    </ul>
    <p>This means you no longer need to rely on third-party libraries (like HotChocolate or GraphQL.NET) for the majority of use cases. Microsoft’s official GraphQL middleware aligns with the rest of the ASP.NET pipeline, making it easier to enforce authentication and apply consistent validation policies.</p>

    <h3>4. Improved Security by Default</h3>
    <p>Security has always been a priority in .NET, and ASP.NET Core 2025 enhances this further with new protocols and tooling:</p>
    <ul>
      <li>Support for <strong>OAuth 2.1</strong> with streamlined token revocation and introspection endpoints</li>
      <li>Deeper integration with <strong>OpenID Connect</strong> identity providers like Azure AD B2C and Auth0</li>
      <li>Automatic CSRF protection even in minimal APIs and WebSocket endpoints</li>
    </ul>
    <p>Additionally, the new <code>Microsoft.AspNetCore.Security.Analyzer</code> package scans your app at build time for common misconfigurations like missing HTTPS redirection, weak JWT algorithms, or open CORS policies. This makes security posture assessment more proactive and developer-friendly.</p>

    <h3>5. Observability & Diagnostics Enhancements</h3>
    <p>ASP.NET Core 2025 introduces significant observability improvements:</p>
    <ul>
      <li>Expanded <strong>EventSource</strong> and <strong>Activity</strong> integration for OpenTelemetry tracing</li>
      <li>Detailed metrics for request pipelines, authentication events, and Blazor lifecycle methods</li>
      <li>Better integration with Prometheus and Azure Monitor for production-grade diagnostics</li>
    </ul>
    <p>With observability baked in, developers gain actionable insight into their apps’ behavior and performance. This reduces debugging time and accelerates issue resolution—especially in distributed systems or containerized environments.</p>

    <h3>6. AI-Assisted Development with IntelliCode & Copilot Extensions</h3>
    <p>Although not part of ASP.NET Core directly, Visual Studio and VS Code now include enhanced integration with <strong>GitHub Copilot</strong> and <strong>IntelliCode AI</strong>. These tools offer context-aware code completion, automated unit test generation, and even code comment summarization using AI models.</p>
    <p>For ASP.NET Core specifically, this means:</p>
    <ul>
      <li>Faster scaffolding of controllers, services, and DTOs</li>
      <li>Improved suggestions for dependency injection patterns and middleware configurations</li>
      <li>Smart refactoring recommendations tailored to .NET idioms</li>
    </ul>

    <h3>Conclusion</h3>
    <p>ASP.NET Core 2025 is not just a routine update—it’s a strategic evolution of the .NET ecosystem. It meets the current demands of cloud-native architectures, secure APIs, cross-platform frontends, and AI-assisted development. Whether you're building enterprise software, APIs, or modern hybrid apps, these enhancements enable cleaner code, faster performance, and more maintainable applications.</p>
    <p>By embracing these innovations early, developers position themselves ahead of the curve—technically and professionally.</p>
  `,
      date: "2025-08-07",
      readTime: "9 min to read",
      category: "ASP.NET Core",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1200",
      author: "Anıl Cem Elemir",
      tags: ["ASP.NET Core", "Blazor", "GraphQL", "OAuth2", "OpenTelemetry", "Native AOT", "Cloud Development"]
    },
    {
      id: 5,
      title: "Integrating React and TypeScript in an MVC Architecture: A Practical Guide",
      excerpt: "Explore how to combine React and TypeScript with traditional MVC backend frameworks to build scalable and maintainable web applications.",
      content: `
    <h2>Integrating React and TypeScript in an MVC Architecture: A Practical Guide</h2>
    <p>Modern web development often blends different architectural patterns to leverage their strengths. One popular combination is using <strong>React</strong> with <strong>TypeScript</strong> on the frontend, while maintaining a traditional <strong>MVC (Model-View-Controller)</strong> architecture on the backend. This approach allows teams to build scalable, maintainable, and high-performance applications by separating concerns effectively.</p>
    
    <h3>What is MVC Architecture?</h3>
    <p>MVC is a design pattern that divides an application into three interconnected components:</p>
    <ul>
      <li><strong>Model:</strong> Represents the data and business logic.</li>
      <li><strong>View:</strong> The user interface that displays data.</li>
      <li><strong>Controller:</strong> Handles user input, interacts with the model, and selects the view to render.</li>
    </ul>
    <p>Many backend frameworks such as <code>ASP.NET Core MVC</code>, <code>Ruby on Rails</code>, and <code>Django</code> follow this pattern.</p>
    
    <h3>Why Use React and TypeScript with MVC?</h3>
    <ul>
      <li><strong>Rich, interactive UIs:</strong> React enables building dynamic and responsive user interfaces.</li>
      <li><strong>Type safety and developer productivity:</strong> TypeScript provides static typing which helps catch errors early and improves code maintainability.</li>
      <li><strong>Clear separation of concerns:</strong> MVC handles backend logic and routing, React handles frontend rendering and UI logic.</li>
      <li><strong>Incremental adoption:</strong> You can gradually replace MVC views with React components, easing migration and development.</li>
    </ul>
    
    <h3>How to Integrate React + TypeScript in an MVC App</h3>
    <p>Here’s a step-by-step overview to set up React and TypeScript within an MVC project:</p>
    <ol>
      <li><strong>Set up the MVC backend:</strong> Create your MVC project with your preferred backend framework. Define your models, controllers, and API endpoints.</li>
      <li><strong>Add a frontend build system:</strong> Use tools like <code>Webpack</code> or <code>Vite</code> to bundle React and TypeScript code.</li>
      <li><strong>Create React components in TypeScript:</strong> Build your UI as reusable components with type annotations.</li>
      <li><strong>Serve the React app via MVC:</strong> Configure the MVC views or static file middleware to serve the React-built assets.</li>
      <li><strong>Use API calls for data fetching:</strong> React components communicate with backend controllers via RESTful APIs or GraphQL.</li>
    </ol>
    
    <h3>Example: Basic Setup in ASP.NET Core MVC</h3>
    <p>Let’s illustrate the integration with an ASP.NET Core MVC example.</p>
    
    <h4>1. Backend Controller:</h4>
    <pre><code class="language-csharp">
[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    [HttpGet]
    public IActionResult GetProducts()
    {
        var products = new List&lt;Product&gt; {
            new Product { Id = 1, Name = "Laptop", Price = 999.99M },
            new Product { Id = 2, Name = "Phone", Price = 499.99M }
        };
        return Ok(products);
    }
}
    </code></pre>
    
    <h4>2. React Component in TypeScript:</h4>
    <pre><code class="language-tsx">
import React, { useEffect, useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState&lt;Product[]&gt;([]);

  useEffect(() => {
    fetch('/api/products')
      .then(res =&gt; res.json())
      .then(data =&gt; setProducts(data));
  }, []);

  return (
    &lt;div&gt;
      &lt;h2&gt;Product List&lt;/h2&gt;
      &lt;ul&gt;
        {products.map(product =&gt; (
          &lt;li key={product.id}&gt;
            {product.name} - $product.price.toFixed(2)}
          &lt;/li&gt;
        ))}
      &lt;/ul&gt;
    &lt;/div&gt;
  );
};

export default ProductList;
    </code></pre>
    
    <h3>Tips for Best Practices</h3>
    <ul>
      <li><strong>Use API versioning:</strong> Keep your backend API stable and versioned to avoid breaking frontend changes.</li>
      <li><strong>Leverage React Router:</strong> Manage frontend routes inside React for a SPA experience, while backend MVC handles API endpoints.</li>
      <li><strong>Componentize UI:</strong> Build small, reusable components with clear props and state management.</li>
      <li><strong>Use TypeScript interfaces:</strong> Strongly type your data models both in backend contracts and frontend components.</li>
      <li><strong>Separate concerns:</strong> Keep business logic in backend models and use React mainly for UI and user interactions.</li>
    </ul>
    
    <h3>Conclusion</h3>
    <p>Integrating React and TypeScript with an MVC backend marries the power of modern frontend frameworks with robust server-side architectures. It facilitates scalable, maintainable applications that deliver excellent user experiences without sacrificing backend stability.</p>
    <p>Whether you’re modernizing an existing MVC app or starting a new project, this hybrid approach provides flexibility and control to build cutting-edge web applications.</p>
  `,
      date: "2025-08-07",
      readTime: "11 min to read",
      category: "React & TypeScript",
      image: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1200",
      author: "Anıl Cem Elemir",
      tags: ["React", "TypeScript", "MVC", "Frontend", "Web Development"]
    }

  ];

  const post = blogPosts.find(p => p.id === parseInt(id || '0'));

  if (!post) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Blog Yazısı Bulunamadı
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Aradığınız blog yazısı mevcut değil.
          </p>
          <Link
            to="/"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Ana Sayfaya Dön
          </Link>
        </div>
      </header>

      {/* Hero Image */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
            <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
              {post.category}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Article Meta */}
        <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400 mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <User className="h-5 w-5 mr-2" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-5 w-5 mr-2" />
            <span>{formatDate(post.date)}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-5 w-5 mr-2" />
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Article Body */}
        <div 
          className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center flex-wrap gap-2">
            <Tag className="h-5 w-5 text-gray-600 dark:text-gray-400 mr-2" />
            {post.tags.map((tag, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center">
            <Link
              to="/#blog"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Tüm Blog Yazıları
            </Link>
            
            <div className="flex space-x-4">
              {/* Önceki/Sonraki yazı linkleri buraya eklenebilir */}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogDetail;