import React from "react";

import Navbar from "@/components/global/nav-bar";
import MDRenderer from "@/components/markdown/renderer";

const content = `
### [Benc Language Guide](/benc/lang)

# Benc Golang Guide
What this guide contains:  
- Define a \`.benc\` schema
- Compiling into \`golang\`
- Using the generated code

This guide provides the basic, if you like to constribute, by editing this page: Feel free to!

## Define your schema
To get basic understanding about a Benc schema, please visit the Benc Language Guide.  
This schema is quite simple, copy the code into \`person.bencc\`:

\`\`\`benc
package person

ctr Person {
  age uint8 @1
  name string @2
  address Address @3
  company Company @4
}

ctr Company {
  address Address @1
}

private ctr Address {
  city string @1
  street string @2
  country string @3
}
\`\`\`

## Compiling
Lets compile the schema:

1. [Install bencc](https://github.com/bencv2/bencc#installation)
2. Read the [bencc usage](https://github.com/bencv2/bencc#usage)
2. Run the compiler:
\`bencc -i person.bencc -l go -o person -n person\`

## Using the generated code
Generating the schema, outputs the following file \`person/person.go\`:

- A struct Person, containing the fields \`Age\`, \`Name\`, \`Address\`, \`Company\`
- A struct Company, containing the fields \`Address\`
- A struct Address, containing the fields \`City\`, \`Street\`, \`Country\`

Here's an example:

\`\`\`go
p := person.Person{
  Age: 25,
  Name: "Jeff",
  Address: person.Address{
    City: "...",
    Street: "...",
    Country: "Germany",
  },
  Company: person.Company{
    Address: person.Address{
      City: "...",
      Street: "...",
      Country: "Mexico",
    },
  },
}
\`\`\`

## Encoding
Encoding the \`person\` struct is easy using benc:

\`\`\`go
// this should be only called once, as bencv2 is [data race(s) safe](https://github.com/bencv2/go-runtime#concurrency)
benc := bencv2.NewEncoder()

p := &person.Person{/*...*/}
// ...

out, err := benc.Encode(p)
if err.IsSome() {
  log.Fatalln("Failed to encode person: " + err.Into())
}

// out is the byte slice containing the encoded person data
\`\`\`

## Decoding
Decode the \`person\` struct from the encoded byte slice:

\`\`\`go
// this should be only called once, as bencv2 is [data race(s) safe](https://github.com/bencv2/go-runtime#concurrency)
benc := bencv2.NewEncoder()

p := &person.Person{}
// ...

// b is the byte slice containing the encoded person

err := benc.Decode(b, p)
if err.IsSome() {
  log.Fatalln("Failed to decode person: " + err.Into())
}
\`\`\`

`;

function BencGoGuide() {
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

export default BencGoGuide;
