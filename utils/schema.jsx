import {
  integer,
  numeric,
  pgTable,
  serial,
  varchar,
} from "drizzle-orm/pg-core";

export const Budgets = pgTable("budgets", {
  id: serial("id").primaryKey(),
  name: varchar("name").notNull(),
  amount: varchar("amount").notNull(),
  icon: varchar("icon"),
  createdBy: varchar("createdBy").notNull(),
});

export const Incomes = pgTable("incomes", {
  id: serial("id").primaryKey(),
  name: varchar("name").notNull(),
  amount: varchar("amount").notNull(),
  icon: varchar("icon"),
  createdBy: varchar("createdBy").notNull(),
});
export const Expenses = pgTable("expenses", {
  id: serial("id").primaryKey(),
  name: varchar("name").notNull(),
  amount: numeric("amount").notNull().default(0),
  budgetId: integer("budgetId").references(() => Budgets.id),
  createdAt: varchar("createdAt").notNull(),
});

// CREATE TABLE budgets (
//   id SERIAL PRIMARY KEY,
//   name VARCHAR NOT NULL,
//   amount VARCHAR NOT NULL,
//   icon VARCHAR,
//   createdBy VARCHAR NOT NULL
// );

// CREATE TABLE incomes (
//   id SERIAL PRIMARY KEY,
//   name VARCHAR NOT NULL,
//   amount VARCHAR NOT NULL,
//   icon VARCHAR,
//   createdBy VARCHAR NOT NULL
// );

// CREATE TABLE expenses (
//   id SERIAL PRIMARY KEY,
//   name VARCHAR NOT NULL,
//   amount NUMERIC NOT NULL DEFAULT 0,
//   budgetId INTEGER REFERENCES budgets(id),
//   createdAt VARCHAR NOT NULL
// );
