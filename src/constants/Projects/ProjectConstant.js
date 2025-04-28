export const projectData = [
  {
    project_id: 1,
    created: 1742169600,
    name: "API Management",
    description: "Internal APIs for the company.",
    base_url: "https://api.company.com",
    version: "v1.0",
    status: "completed",
    lastUpdated: "1742789070",
    endpoints: [
      {
        endpoint_id: 1,
        method: "GET",
        path: "/users",
        query_params: {
          limit: 10,
          offset: 0,
        },
        request_body: null,
        response: {
          status: 200,
          data: [
            { id: 1, name: "John Doe" },
            { id: 2, name: "Jane Smith" },
          ],
        },
      },
    ],
    developers: [
      {
        developer_id: 1,
        name: "Alice",
        email: "alice@company.com",
        role: "Developer",
        permissions: ["read", "write"],
        created: 1742169600,
      },
      {
        developer_id: 2,
        name: "John",
        email: "john@company.com",
        role: "Developer",
        permissions: ["read", "write"],
        created: 1742169600,
      },
    ],
  },
  {
    project_id: 2,
    created: 1742176800,
    name: "Payment API",
    description: "Internal APIs for the company.",
    base_url: "https://api.company.com",
    version: "v1.0",
    status: "completed",
    lastUpdated: "1742789070",
    modules: [
      {
        module_id: 21,
        name: "introduction",

        sub_modules: [
          {
            sub_module_id: 211,
            name: "Get Users",
            created: "1712158637",
            lastUpdated: "1712462312",
            description: {
              type: "doc",
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      text: "In the Payment API, each business entity is referred to as a ",
                    },
                    {
                      type: "text",
                      marks: [{ type: "bold" }],
                      text: "merchant account",
                    },
                    {
                      type: "text",
                      text: ". If you operate multiple businesses, you can set each one up as a separate merchant account. Every merchant account functions independently, with its own unique merchant ID, default currency, time zone, language preferences, customer records, reports, and more.",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      text: "To identify which merchant account you're interacting with, include the ",
                    },
                    {
                      type: "text",
                      marks: [{ type: "code" }],
                      text: "merchant_id",
                    },
                    {
                      type: "text",
                      text: " parameter along with its value in every API request.",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      text: "You can retrieve the ",
                    },
                    {
                      type: "text",
                      marks: [{ type: "code" }],
                      text: "merchant_id",
                    },
                    {
                      type: "text",
                      text: " using the ",
                    },
                    {
                      type: "text",
                      marks: [{ type: "code" }],
                      text: "GET /merchants",
                    },
                    {
                      type: "text",
                      text: " endpoint, which returns the list of available merchant accounts in the JSON response. Alternatively, you can find it in your admin dashboard:",
                    },
                  ],
                },
                {
                  type: "bulletList",
                  content: [
                    {
                      type: "listItem",
                      content: [
                        {
                          type: "paragraph",
                          content: [
                            {
                              type: "text",
                              text: "Log in to the Payment API admin console.",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "listItem",
                      content: [
                        {
                          type: "paragraph",
                          content: [
                            {
                              type: "text",
                              text: "Click the dropdown labeled with your current merchant name.",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "listItem",
                      content: [
                        {
                          type: "paragraph",
                          content: [
                            { type: "text", text: "Select " },
                            {
                              type: "text",
                              marks: [{ type: "bold" }],
                              text: "Manage Accounts",
                            },
                            {
                              type: "text",
                              text: " to view or switch between merchant accounts.",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },

            
            method: "GET",
            query_params: {
              limit: 10,
              offset: 0,
            },
            urlSets: [
              {
                urlType: "endpoint",
                urlContent: "/users",
              },
              {
                urlType: "request_example",
                urlContent: ` {
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: {
                    name: "Alice Johnson",
                    email: "alice@example.com",
                  },
                }`,
              },
              {
                urlType: "response_example",
                urlContent: `{
                   "status": 201,
                   "data": {
                      "id": 3,
                      "name": "Alice Johnson",
                      "email": "alice@example.com"
                    }
                }`,
              },
            ],
          },
          {
            description: {
              type: "doc",
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      text: "The Payment API enables you to perform all the operations available through our web interface, offering complete control over your payment workflows programmatically.",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      text: "Built on ",
                    },
                    {
                      type: "text",
                      marks: [{ type: "bold" }],
                      text: "RESTful architecture",
                    },
                    {
                      type: "text",
                      text: ", the Payment API provides predictable and structured URLs, making it easy to integrate into your applications. It adheres to standard HTTP protocols, allowing seamless interaction using a wide range of HTTP clients.",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      text: "Each resource, such as transactions, customers, and payment gateways, is accessible via a unique URL. You can discover the endpoints by referencing the ",
                    },
                    {
                      type: "text",
                      marks: [{ type: "italic" }],
                      text: "API Root Endpoint",
                    },
                    {
                      type: "text",
                      text: ".",
                    },
                  ],
                },
              ],
            },
            sub_module_id: 212,
            created: "1712158637",
            lastUpdated: "1712462312",
            name: "overview",
            urlSets:[
                {
                  urlType:"API Root Endpoint",
                  urlContent:"https://api.company.com"
                },
            ],

           
          },
          {
            sub_module_id: 213,
            name: "Create User",
            description:
              "<p><strong>Add a new user</strong> to the system. Must include a <code>name</code> and <code>email</code> in the request body.</p>",
            
            created: "1712158637",
            lastUpdated: "1712462312",
            method: "POST",
            query_params: {},
            urlSets: [
              {
                urlType: "endpoint",
                urlContent: "/users",
              },
              {
                urlType: "request_example",
                urlContent: ` {
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: {
                    name: "Alice Johnson",
                    email: "alice@example.com",
                  },
                }`,
              },
              {
                urlType: "response_example",
                urlContent: `{
                   "status": 201,
                   "data": {
                      "id": 3,
                      "name": "Alice Johnson",
                      "email": "alice@example.com"
                    }
                }`,
              },
            ],
          },
        ],
      },
      {
        module_id: 22,
        name: "introduction 2",

        sub_modules: [
          {
            sub_module_id: 221,
            name: "Get Users 2",
            created: "1712158637",
            lastUpdated: "1712462312",
            description: {
              type: "doc",
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      text: "In the Payment API, each business entity is referred to as a ",
                    },
                    {
                      type: "text",
                      marks: [{ type: "bold" }],
                      text: "merchant account",
                    },
                    {
                      type: "text",
                      text: ". If you operate multiple businesses, you can set each one up as a separate merchant account. Every merchant account functions independently, with its own unique merchant ID, default currency, time zone, language preferences, customer records, reports, and more.",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      text: "To identify which merchant account you're interacting with, include the ",
                    },
                    {
                      type: "text",
                      marks: [{ type: "code" }],
                      text: "merchant_id",
                    },
                    {
                      type: "text",
                      text: " parameter along with its value in every API request.",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      text: "You can retrieve the ",
                    },
                    {
                      type: "text",
                      marks: [{ type: "code" }],
                      text: "merchant_id",
                    },
                    {
                      type: "text",
                      text: " using the ",
                    },
                    {
                      type: "text",
                      marks: [{ type: "code" }],
                      text: "GET /merchants",
                    },
                    {
                      type: "text",
                      text: " endpoint, which returns the list of available merchant accounts in the JSON response. Alternatively, you can find it in your admin dashboard:",
                    },
                  ],
                },
                {
                  type: "bulletList",
                  content: [
                    {
                      type: "listItem",
                      content: [
                        {
                          type: "paragraph",
                          content: [
                            {
                              type: "text",
                              text: "Log in to the Payment API admin console.",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "listItem",
                      content: [
                        {
                          type: "paragraph",
                          content: [
                            {
                              type: "text",
                              text: "Click the dropdown labeled with your current merchant name.",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "listItem",
                      content: [
                        {
                          type: "paragraph",
                          content: [
                            { type: "text", text: "Select " },
                            {
                              type: "text",
                              marks: [{ type: "bold" }],
                              text: "Manage Accounts",
                            },
                            {
                              type: "text",
                              text: " to view or switch between merchant accounts.",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },

            
            method: "GET",
            query_params: {
              limit: 10,
              offset: 0,
            },
            urlSets: [
              {
                urlType: "endpoint",
                urlContent: "/users",
              },
              {
                urlType: "request_example",
                urlContent: ` {
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: {
                    name: "Alice Johnson",
                    email: "alice@example.com",
                  },
                }`,
              },
              {
                urlType: "response_example",
                urlContent: `{
                   "status": 201,
                   "data": {
                      "id": 3,
                      "name": "Alice Johnson",
                      "email": "alice@example.com"
                    }
                }`,
              },
            ],
          },
          {
            description: {
              type: "doc",
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      text: "The Payment API enables you to perform all the operations available through our web interface, offering complete control over your payment workflows programmatically.",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      text: "Built on ",
                    },
                    {
                      type: "text",
                      marks: [{ type: "bold" }],
                      text: "RESTful architecture",
                    },
                    {
                      type: "text",
                      text: ", the Payment API provides predictable and structured URLs, making it easy to integrate into your applications. It adheres to standard HTTP protocols, allowing seamless interaction using a wide range of HTTP clients.",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      text: "Each resource, such as transactions, customers, and payment gateways, is accessible via a unique URL. You can discover the endpoints by referencing the ",
                    },
                    {
                      type: "text",
                      marks: [{ type: "italic" }],
                      text: "API Root Endpoint",
                    },
                    {
                      type: "text",
                      text: ".",
                    },
                  ],
                },
              ],
            },
            sub_module_id: 222,
            created: "1712158637",
            lastUpdated: "1712462312",
            name: "overview",

            
            is_submodule: true,
            urlSets: [
              {
                urlType: "endpoint",
                urlContent: "/users",
              },
              {
                urlType: "request_example",
                urlContent: ` {
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: {
                    name: "Alice Johnson",
                    email: "alice@example.com",
                  },
                }`,
              },
              {
                urlType: "response_example",
                urlContent: `{
                   "status": 201,
                   "data": {
                      "id": 3,
                      "name": "Alice Johnson",
                      "email": "alice@example.com"
                    }
                }`,
              },
            ],
          },
          {
            sub_module_id: 223,
            name: "Create User",
            description:
              "<p><strong>Add a new user</strong> to the system. Must include a <code>name</code> and <code>email</code> in the request body.</p>",
            url_type: "endpoint",
            url_code: "/users",
            created: "1712158637",
            lastUpdated: "1712462312",
            method: "POST",
            query_params: {},
            request_example:
              '<pre><code>{\n  "headers": {\n    "Content-Type": "application/json"\n  },\n  "body": {\n    "name": "Alice Johnson",\n    "email": "alice@example.com"\n  }\n}</code></pre>',
            response_example:
              '<pre><code>{\n  "status": 201,\n  "data": {\n    "id": 3,\n    "name": "Alice Johnson",\n    "email": "alice@example.com"\n  }\n}</code></pre>',
          },
        ],
      },
      {
        module_id: 2.3,
        name: "introduction 3",

        sub_modules: [
          {
            sub_module_id: 231,
            name: "Get Users 3",
            created: "1712158637",
            lastUpdated: "1712462312",
            description: {
              type: "doc",
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      text: "In the Payment API, each business entity is referred to as a ",
                    },
                    {
                      type: "text",
                      marks: [{ type: "bold" }],
                      text: "merchant account",
                    },
                    {
                      type: "text",
                      text: ". If you operate multiple businesses, you can set each one up as a separate merchant account. Every merchant account functions independently, with its own unique merchant ID, default currency, time zone, language preferences, customer records, reports, and more.",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      text: "To identify which merchant account you're interacting with, include the ",
                    },
                    {
                      type: "text",
                      marks: [{ type: "code" }],
                      text: "merchant_id",
                    },
                    {
                      type: "text",
                      text: " parameter along with its value in every API request.",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      text: "You can retrieve the ",
                    },
                    {
                      type: "text",
                      marks: [{ type: "code" }],
                      text: "merchant_id",
                    },
                    {
                      type: "text",
                      text: " using the ",
                    },
                    {
                      type: "text",
                      marks: [{ type: "code" }],
                      text: "GET /merchants",
                    },
                    {
                      type: "text",
                      text: " endpoint, which returns the list of available merchant accounts in the JSON response. Alternatively, you can find it in your admin dashboard:",
                    },
                  ],
                },
                {
                  type: "bulletList",
                  content: [
                    {
                      type: "listItem",
                      content: [
                        {
                          type: "paragraph",
                          content: [
                            {
                              type: "text",
                              text: "Log in to the Payment API admin console.",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "listItem",
                      content: [
                        {
                          type: "paragraph",
                          content: [
                            {
                              type: "text",
                              text: "Click the dropdown labeled with your current merchant name.",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "listItem",
                      content: [
                        {
                          type: "paragraph",
                          content: [
                            { type: "text", text: "Select " },
                            {
                              type: "text",
                              marks: [{ type: "bold" }],
                              text: "Manage Accounts",
                            },
                            {
                              type: "text",
                              text: " to view or switch between merchant accounts.",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },

            
            method: "GET",
            query_params: {
              limit: 10,
              offset: 0,
            },
            urlSets: [
              {
                urlType: "endpoint",
                urlContent: "/users",
              },
              {
                urlType: "request_example",
                urlContent: ` {
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: {
                    name: "Alice Johnson",
                    email: "alice@example.com",
                  },
                }`,
              },
              {
                urlType: "response_example",
                urlContent: `{
                   "status": 201,
                   "data": {
                      "id": 3,
                      "name": "Alice Johnson",
                      "email": "alice@example.com"
                    }
                }`,
              },
            ],

          },
          {
            description: {
              type: "doc",
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      text: "The Payment API enables you to perform all the operations available through our web interface, offering complete control over your payment workflows programmatically.",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      text: "Built on ",
                    },
                    {
                      type: "text",
                      marks: [{ type: "bold" }],
                      text: "RESTful architecture",
                    },
                    {
                      type: "text",
                      text: ", the Payment API provides predictable and structured URLs, making it easy to integrate into your applications. It adheres to standard HTTP protocols, allowing seamless interaction using a wide range of HTTP clients.",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      text: "Each resource, such as transactions, customers, and payment gateways, is accessible via a unique URL. You can discover the endpoints by referencing the ",
                    },
                    {
                      type: "text",
                      marks: [{ type: "italic" }],
                      text: "API Root Endpoint",
                    },
                    {
                      type: "text",
                      text: ".",
                    },
                  ],
                },
              ],
            },
            sub_module_id: 232,
            created: "1712158637",
            lastUpdated: "1712462312",
            name: "overview",

            url_type: "API Root Endpoint",
            url_code: "https://api.company.com",
            is_submodule: true,
          },
          {
            sub_module_id: 233,
            name: "Create User",
            description:
              "<p><strong>Add a new user</strong> to the system. Must include a <code>name</code> and <code>email</code> in the request body.</p>",

            created: "1712158637",
            lastUpdated: "1712462312",
            method: "POST",
            urlSets: [
              {
                urlType: "endpoint",
                urlContent: "/users",
              },
              {
                urlType: "request_example",
                urlContent: ` {
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: {
                    name: "Alice Johnson",
                    email: "alice@example.com",
                  },
                }`,
              },
              {
                urlType: "response_example",
                urlContent: `{
                   "status": 201,
                   "data": {
                      "id": 3,
                      "name": "Alice Johnson",
                      "email": "alice@example.com"
                    }
                }`,
              },
            ],

           

           
          },
        ],
      },
    ],
    developers: [
      {
        developer_id: 2,
        name: "John",
        email: "john@company.com",
        role: "Developer",
        permissions: ["read", "write"],
        created: 1742169600,
      },
    ],
  },
  {
    project_id: 3,
    name: "DOG API",
    created: 1742263200,
    description: "Internal APIs for the company.",
    base_url: "https://api.company.com",
    version: "v1.0",
    status: "in progress",
    lastUpdated: "1742789070",
    endpoints: [
      {
        endpoint_id: 1,
        method: "GET",
        path: "/users",
        query_params: {
          limit: 10,
          offset: 0,
        },
        request_body: null,
        response: {
          status: 200,
          data: [
            { id: 1, name: "John Doe" },
            { id: 2, name: "Jane Smith" },
          ],
        },
      },
    ],
    developers: [
      {
        developer_id: 3,
        name: "sherin",
        email: "sherin@company.com",
        role: "Developer",
        permissions: ["read", "write"],
        created: 1742169600,
      },
    ],
  },
  {
    project_id: 4,
    created: 1742256000,
    name: "CAT API",
    description: "Internal APIs for the company.",
    base_url: "https://api.company.com",
    version: "v1.0",
    status: "completed",
    lastUpdated: "1742789070",
    endpoints: [
      {
        endpoint_id: 1,
        method: "GET",
        path: "/users",
        query_params: {
          limit: 10,
          offset: 0,
        },
        request_body: null,
        response: {
          status: 200,
          data: [
            { id: 1, name: "John Doe" },
            { id: 2, name: "Jane Smith" },
          ],
        },
      },
    ],
    developers: [
      {
        developer_id: 4,
        name: "riyas",
        email: "riyas@company.com",
        role: "Developer",
        permissions: ["read", "write"],
        created: 1742169600,
      },
    ],
  },
  {
    project_id: 5,
    created: 1742248800,
    name: "API MOOSE",
    description: "Internal APIs for the company.",
    base_url: "https://api.company.com",
    version: "v1.0",
    status: "completed",
    lastUpdated: "1742789070",
    endpoints: [
      {
        endpoint_id: 1,
        method: "GET",
        path: "/users",
        query_params: {
          limit: 10,
          offset: 0,
        },
        request_body: null,
        response: {
          status: 200,
          data: [
            { id: 1, name: "John Doe" },
            { id: 2, name: "Jane Smith" },
          ],
        },
      },
    ],
    developers: [
      {
        developer_id: 5,
        name: "shajon",
        email: "shajon@company.com",
        role: "Developer",
        permissions: ["read", "write"],
        created: 1742169600,
      },
    ],
  },
  {
    project_id: 6,
    created: 1742241600,
    name: "API LAMB",
    description: "Internal APIs for the company.",
    base_url: "https://api.company.com",
    version: "v1.0",
    status: "started",
    lastUpdated: "1742789070",
    endpoints: [
      {
        endpoint_id: 1,
        method: "GET",
        path: "/users",
        query_params: {
          limit: 10,
          offset: 0,
        },
        request_body: null,
        response: {
          status: 200,
          data: [
            { id: 1, name: "John Doe" },
            { id: 2, name: "Jane Smith" },
          ],
        },
      },
    ],
    developers: [
      {
        developer_id: 6,
        name: "ravi",
        email: "ravi@company.com",
        role: "Developer",
        permissions: ["read", "write"],
        created: 1742169600,
      },
    ],
  },
  {
    project_id: 7,
    created: 1742234400,
    name: "API water",
    description: "Internal APIs for the company.",
    base_url: "https://api.company.com",
    version: "v1.0",
    status: "completed",
    lastUpdated: "1742616270",
    endpoints: [
      {
        endpoint_id: 1,
        method: "GET",
        path: "/users",
        query_params: {
          limit: 10,
          offset: 0,
        },
        request_body: null,
        response: {
          status: 200,
          data: [
            { id: 1, name: "John Doe" },
            { id: 2, name: "Jane Smith" },
          ],
        },
      },
    ],
    developers: [
      {
        developer_id: 7,
        name: "rahul",
        email: "rahul@company.com",
        role: "Developer",
        permissions: ["read", "write"],
        created: 1742169600,
      },
    ],
  },
  {
    project_id: 8,
    created: 1742227200,
    name: "API fire",
    description:
      " for the company. This includes all services related to user management, access control, and more.",
    base_url: "https://api.company.com",
    version: "v1.0",
    status: "completed",
    lastUpdated: "1742789070",
    modules: [
      {
        module_id: 81,
        name: "Introduction",

        sub_modules: [
          {
            sub_module_id: 811,
            name: "Get Users",
            created: "1712158637",
            lastUpdated: "1712462312",
            description:
              "<p>Retrieve all users from the system with optional query parameters for <code>limit</code> and <code>offset</code>.</p>",
            url_type: "user endpoint",
            url_code: "/users",
            method: "GET",
            query_params: {
              limit: 10,
              offset: 0,
            },
            request_example:
              '<pre><code>{\n  "headers": {\n    "Authorization": "Bearer &lt;token&gt;"\n  },\n  "params": {\n    "limit": 10,\n    "offset": 0\n  }\n}</code></pre>',
            response_example:
              '<pre><code>{\n  "status": 200,\n  "data": [\n    { "id": 1, "name": "John Doe" },\n    { "id": 2, "name": "Jane Smith" }\n  ]\n}</code></pre>',
          },
          {
            sub_module_id: 812,
            name: "Create User",
            created: "1712158637",
            lastUpdated: "1712462312",
            description:
              "<p><strong>Add a new user</strong> to the system. Must include a <code>name</code> and <code>email</code> in the request body.</p>",
            url_type: "endpoint",
            url_code: "/users",
            method: "POST",
            query_params: {},
            request_example:
              '<pre><code>{\n  "headers": {\n    "Content-Type": "application/json"\n  },\n  "body": {\n    "name": "Alice Johnson",\n    "email": "alice@example.com"\n  }\n}</code></pre>',
            response_example:
              '<pre><code>{\n  "status": 201,\n  "data": {\n    "id": 3,\n    "name": "Alice Johnson",\n    "email": "alice@example.com"\n  }\n}</code></pre>',
          },
        ],
      },
    ],
    developers: [
      {
        developer_id: 1,
        name: "Alice",
        email: "alice@company.com",
        role: "Developer",
        permissions: ["read", "write"],
        created: 1742169600,
      },
      {
        developer_id: 7,
        name: "rahul",
        email: "rahul@company.com",
        role: "Developer",
        permissions: ["read", "write"],
        created: 1742169600,
      },
      {
        developer_id: 5,
        name: "shajon",
        email: "shajon@company.com",
        role: "Developer",
        permissions: ["read", "write"],
        created: 1742169600,
      },
    ],
  },

  {
    project_id: 9,
    created: 1742220000,
    name: "API earth",
    description: "Internal APIs for the company.",
    base_url: "https://api.company.com",
    version: "v1.0",
    status: "completed",
    lastUpdated: "1742789070",
    endpoints: [
      {
        endpoint_id: 1,
        method: "GET",
        path: "/users",
        query_params: {
          limit: 10,
          offset: 0,
        },
        request_body: null,
        response: {
          status: 200,
          data: [
            { id: 1, name: "John Doe" },
            { id: 2, name: "Jane Smith" },
          ],
        },
      },
    ],
    developers: [
      {
        developer_id: 2,
        name: "John",
        email: "john@company.com",
        role: "Developer",
        permissions: ["read", "write"],
        created: 1742169600,
      },
    ],
  },
  {
    project_id: 10,
    created: 1742212800,
    name: "API air",
    description: "Internal APIs for the company.",
    base_url: "https://api.company.com",
    version: "v1.0",
    status: "completed",
    lastUpdated: "1742616270",
    endpoints: [
      {
        endpoint_id: 1,
        method: "GET",
        path: "/users",
        query_params: {
          limit: 10,
          offset: 0,
        },
        request_body: null,
        response: {
          status: 200,
          data: [
            { id: 1, name: "John Doe" },
            { id: 2, name: "Jane Smith" },
          ],
        },
      },
    ],
    developers: [
      {
        developer_id: 3,
        name: "sherin",
        email: "sherin@company.com",
        role: "Developer",
        permissions: ["read", "write"],
        created: 1742169600,
      },
    ],
  },
  {
    project_id: 11,
    created: 1742205600,
    name: "API petstore",
    description: "Internal APIs for the company.",
    base_url: "https://api.company.com",
    version: "v1.0",
    status: "completed",
    lastUpdated: "1742616270",
    endpoints: [
      {
        endpoint_id: 1,
        method: "GET",
        path: "/users",
        query_params: {
          limit: 10,
          offset: 0,
        },
        request_body: null,
        response: {
          status: 200,
          data: [
            { id: 1, name: "John Doe" },
            { id: 2, name: "Jane Smith" },
          ],
        },
      },
    ],
    developers: [
      {
        developer_id: 4,
        name: "riyas",
        email: "riyas@company.com",
        role: "Developer",
        permissions: ["read", "write"],
        created: 1742169600,
      },
    ],
  },
  {
    project_id: 12,
    created: 1742198400,
    name: "API food",
    description: "Internal APIs for the company.",
    base_url: "https://api.company.com",
    version: "v1.0",
    status: "completed",
    lastUpdated: "1742702670",
    endpoints: [
      {
        endpoint_id: 1,
        method: "GET",
        path: "/users",
        query_params: {
          limit: 10,
          offset: 0,
        },
        request_body: null,
        response: {
          status: 200,
          data: [
            { id: 1, name: "John Doe" },
            { id: 2, name: "Jane Smith" },
          ],
        },
      },
    ],
    developers: [
      {
        developer_id: 5,
        name: "shajon",
        email: "shajon@company.com",
        role: "Developer",
        permissions: ["read", "write"],
        created: 1742169600,
      },
    ],
  },
  {
    project_id: 13,
    created: 1742191200,
    name: "API e-commerce",
    description: "Internal APIs for the company.",
    base_url: "https://api.company.com",
    version: "v1.0",
    status: "completed",
    lastUpdated: "1742789070",
    endpoints: [
      {
        endpoint_id: 1,
        method: "GET",
        path: "/users",
        query_params: {
          limit: 10,
          offset: 0,
        },
        request_body: null,
        response: {
          status: 200,
          data: [
            { id: 1, name: "John Doe" },
            { id: 2, name: "Jane Smith" },
          ],
        },
      },
    ],
    developers: [
      {
        developer_id: 6,
        name: "ravi",
        email: "ravi@company.com",
        role: "Developer",
        permissions: ["read", "write"],
        created: 1742169600,
      },
    ],
  },
  {
    project_id: 14,
    created: 1742184000,
    name: "API training",
    description: "Internal APIs for the company.",
    base_url: "https://api.company.com",
    version: "v1.0",
    status: "in progress",
    lastUpdated: "1742702670",
    endpoints: [
      {
        endpoint_id: 1,
        method: "GET",
        path: "/users",
        query_params: {
          limit: 10,
          offset: 0,
        },
        request_body: null,
        response: {
          status: 200,
          data: [
            { id: 1, name: "John Doe" },
            { id: 2, name: "Jane Smith" },
          ],
        },
      },
      {
        endpoint_id: 2,
        method: "GET",
        path: "/users",
        query_params: {
          limit: 10,
          offset: 0,
        },
        request_body: null,
        response: {
          status: 200,
          data: [
            { id: 1, name: "John Doe" },
            { id: 2, name: "Jane Smith" },
          ],
        },
      },
    ],
    developers: [
      {
        developer_id: 7,
        name: "rahul",
        email: "rahul@company.com",
        role: "Developer",
        permissions: ["read", "write"],
        created: 1742169600,
      },
    ],
  },
];
