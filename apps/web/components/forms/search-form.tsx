"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { SearchIcon } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

interface SearchFormProps {
  className?: string;
}

const searchFormSchema = z.object({
  search: z.string().min(2, {
    message: "Search must be at least 2 characters.",
  }),

  location: z.string().min(2, {
    message: "Location must be at least 2 characters.",
  }),
});

export default function SearchForm({ className }: SearchFormProps) {
  const form = useForm<z.infer<typeof searchFormSchema>>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      search: "",
      location: "",
    },
  });

  function onSubmit(values: z.infer<typeof searchFormSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("flex flex-col md:flex-row gap-4 items-end", className)}
      >
        <FormField
          control={form.control}
          name="search"
          render={({ field }) => (
            <FormItem className="w-full md:flex-1 grid gap-4">
              <FormLabel className="text-lg xl:text-2xl">Find jobs</FormLabel>
              <FormControl>
                <Input
                  className="h-14 text-base"
                  placeholder="Search for jobs by title or keyword"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem className="w-full md:w-1/3">
              <FormControl>
                <Input
                  className="h-14 text-base"
                  placeholder={`Location`}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          variant="secondary"
          className="!p-0 flex items-center justify-center rounded w-full md:w-14 md:h-14 !font-black"
        >
          <SearchIcon className="w-8 h-8" />
        </Button>
      </form>
    </Form>
  );
}
