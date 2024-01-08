import type { NextPage } from "next";

import SearchForm from "@/components/forms/search-form";
import Hero from "@/components/hero";
import PageLayout from "@/components/layouts/page-layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { landingCategoryCards } from "@/lib/config";
import Link from "next/link";

interface Props {}

const Page: NextPage<Props> = () => {
  return (
    <PageLayout className="flex-1 pt-0 pb-10 md:pb-16 xl:gap-16 space-y-10 lg:space-y-16">
      {/* Hero with Search Form */}
      <Hero className="w-full h-full min-h-[40svh] bg-primary text-primary-foreground">
        <div className="w-full h-max max-w-screen-xl mx-auto">
          <SearchForm className="w-full" />
        </div>
      </Hero>

      {/* Landing Category Cards */}
      <section className="w-full max-w-screen-xl mx-auto ">
        <div className="grid justify-center md:grid-cols-2 xl:grid-cols-3 gap-2">
          {landingCategoryCards.map((catCard) => (
            <Card
              key={catCard.link}
              className="w-full h-full grid justify-center"
            >
              <CardHeader className="flex items-center justify-center">
                <CardTitle className="text-lg lg:text-xl font-medium">
                  {catCard.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                {catCard.content}
              </CardContent>
              <CardFooter className="flex items-end">
                <Button size="lg" variant="outline" className="w-full" asChild>
                  <Link href={catCard.link} className="w-full">
                    View open jobs
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Breakout */}
      <section className="breakout h-[35svh] bg-teal-500"></section>
    </PageLayout>
  );
};

export default Page;
