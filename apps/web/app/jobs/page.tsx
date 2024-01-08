import type { NextPage } from "next";

import Hero from "@/components/hero";
import SearchForm from "@/components/forms/search-form";
import PageLayout from "@/components/layouts/page-layout";

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
      <section className="w-full max-w-screen-xl mx-auto ">
        <h1 className="text-lg">Jobs go here...</h1>
      </section>
    </PageLayout>
  );
};

export default Page;
