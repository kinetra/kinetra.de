import React from "react";

import Navbar from "@/components/global/nav-bar";
import MDRenderer from "@/components/markdown/renderer";

const content = `
### [Benc Go Guide](/benc/go)

# Benc Language Guide
Explains how to use the benc language, as well as the \`.benc\` file syntax.  
This guide provides the basic, if you like to constribute, by editing this page: Feel free to!
  
## Container Type
A container is a wrapper for a list of fields. Lets create a simple person container, including a \`name\`, an \`age\` and an \`email\`:

\`\`\`benc
package person

ctr Person {
  age uint8 @1
  name string @2
}
\`\`\`

- The first line, specifies the package, it is equivalent to the go package declaration.
- The next line, \`ctr Person\`, specifies the container with your choosen name.
- The two lines, inside the brackets are the fields, each field has a name, a type and a unique ID: \`NAME type @ID\`

## Multiple Containers
You can add multiple containers, like:

\`\`\`benc
package person

ctr Person {
  age uint8 @1
  name string @2

  work Work @3
}

ctr Work {
  type string @1
}
\`\`\`

If \`Work\` should not be directly encodable (only using \`Person\`), you can mark it as \`private\`:

\`\`\`benc
package person

ctr Person {
  age uint8 @1
  name string @2

  work Work @3
}

private ctr Work {
  type string @1
}
\`\`\`

## Adding Comments
To add comments, use a \`#\`:

\`\`\`benc
package person

# Person includes an age and name 🔥
ctr Person {
  age uint8 @1
  name string @2
}
\`\`\`

## Enums
Enums are planned.

# Fields
Each field has a name, a type and a unique ID: \`NAME type @ID\`

## IDs
Set a ID to a field by adding \`@ID\` to the end of a field declaration.  
A ID can be in a range of \`1-65535\`, has to be unique \`in each container\` and is required.

For example:

\`\`\`benc
package person

ctr Person {
  # Using field ID 1
  age uint8 @1
  # Using field ID 2
  name string @2
}

ctr Work {
  # Using field ID 1
  type string @1
}
\`\`\`

## Types
The following types are supported: \`string float32 float64 int uint int8 int16 int32 int64 uint8 uint16 uint32 uint64 bytes\`

\`string\`: a string in [ASCII](https://www.ascii-code.com/) representation, cannot be longer than \`2^63\`  
\`bytes\`: a sequence of bytes, cannot be longer than \`2^63\`  

\`int\`: uses variable-length encoding. For better performance, use fixed-length ones (int8, int16, ...)  
\`uint\`: uses variable-length encoding. For better performance, use fixed-length ones (uint8, uint16, ...)  

\`int8\`: fixed signed integer of 1 byte  
\`int16\`: fixed signed integer of 2 byte  
\`int32\`: fixed signed integer of 4 byte  
\`int64\`: fixed signed integer of 8 byte  

The following also applies for uint8, uint16, uint32, uint64

## Attributes
The following field attributes are supported: \`safe  map[K]  []\`

map[K] and [] is currently only supported by \`bencc\`, not by any runtime, so generated code using these attributes is resulting into \`errors\`.

\`[]\`: Marks the field as an Array, for example: \`people []Person @1\`  
\`map[K]\`: Marks the field as a Map, for example: \`bank map[string]float64 @2\`  
\`safe\`: Only supported in \`go\` and \`string\` type, uses safe string conversions, for example: \`safe name string @3\`  

## Deleting Fields
When deleting fields, the ID of the removed field has to be reserved and \`cannot\` be reused again for new fields.

For example, given this container:

\`\`\`benc
package person

ctr Person {
  age uint8 @1
  name string @2
}
\`\`\`

Lets say the \`age\` field is now deprecated and should be removed:

\`\`\`benc
package person

ctr Person {
  reserved 1

  name string @2
}
\`\`\`

The \`reserved\` keyword can only be declared once per container and has to be declared over all fields.  
Reserved IDs are seperated by a comma: \`reserved 1, 4, 5\`
`;

function BencLangGuide() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <div className="relative">
        <div className="max-w-7xl mx-auto p-5">
          <Navbar benc />

          <MDRenderer className="max-w-full mt-6 md:mt-12 text-lg">
            {content}
          </MDRenderer>
        </div>
      </div>
    </div>
  );
}

export default BencLangGuide;
