import { drizzle as drizzleLibsql } from "drizzle-orm/libsql";
import { drizzle as drizzleD1 } from "drizzle-orm/d1";

type GetDbProps = {
  d1Binding?: D1Database;
  libsqlBinding?: string;
};

export const getDb = ({ d1Binding, libsqlBinding }: GetDbProps) => {
  if (d1Binding) return drizzleD1(d1Binding);
  if (libsqlBinding) return drizzleLibsql(libsqlBinding);

  throw new Error("No database binding provided");
};

export type DrizzleClient = ReturnType<typeof getDb>;
