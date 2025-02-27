"use client";

import { useUser } from "@clerk/nextjs";
import { useSchematicEvents } from "@schematichq/schematic-react";
import { useEffect } from "react";

const SchematicWrapper = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const { identify } = useSchematicEvents();
  const { user } = useUser();

  useEffect(() => {
    const userName =
      user?.username ??
      user?.fullName ??
      user?.emailAddresses[0]?.emailAddress ??
      user?.id;

    if (user?.id) {
      identify({
        // company level
        company: {
          keys: {
            id: user?.id,
          },
          name: userName,
        },

        // user level
        keys: {
          id: user?.id,
        },
        name: userName,
      });
    }
  }, [user, identify]);

  return children;
};

export default SchematicWrapper;
