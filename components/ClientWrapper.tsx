"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { SchematicProvider } from "@schematichq/schematic-react";
import SchematicWrapper from "./SchematicWrapper";

const ClientWrapper = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const schematicPublicKey = process.env.NEXT_PUBLIC_SCHEMATIC_PUBLIC_KEY;
  if (!schematicPublicKey) {
    throw new Error(
      "NEXT_PUBLIC_SCHEMATIC_PUBLIC_KEY is not defined in the environment"
    );
  }
  return (
    <ClerkProvider>
      <SchematicProvider publishableKey={schematicPublicKey}>
        <SchematicWrapper>{children}</SchematicWrapper>
      </SchematicProvider>
    </ClerkProvider>
  );
};

export default ClientWrapper;
