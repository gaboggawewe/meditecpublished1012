import React, { useState } from "react";
import { humanize } from "@/lib/utils/textConverter";
import { marked } from "marked";
import { AiOutlineArrowRight } from "react-icons/ai";

const IntegrateMedia = ({ integrations, categories }) => {
  const [tab, setTab] = useState("");
  const filterPost = !tab
    ? integrations
    : integrations.filter((post) => post.data.categories.includes(tab));
  return (
    <section className="section pt-0">
      <div className="container">
        <div className="row justify-center">
          <div className="lg:col-10">
          </div>
        </div>
        <div className="integration-tab-items row mt-10">
          {filterPost.map((item, i) => (
            <div
              key={i}
              className="integration-tab-item mb-8 md:col-6 lg:col-4"
            >
              <div className="rounded-xl bg-white px-10 pb-8 pt-11 shadow-lg">
                <div className="integration-card-head flex items-center space-x-4">
                  <img src={item.data.image} alt="" />
                  <div>
                    <h4 className="h4">{humanize(item.data.name)}</h4>
                    {item.data.categories.map((category, i) => (
                      <span className="font-medium" key={i}>
                        {humanize(category)}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="my-5 border-y border-border py-5">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: marked.parseInline(
                        item.data.excerpt.slice(0, 80),
                      ),
                    }}
                  />
                </div>

                <a
                  className="group inline-flex items-center font-semibold text-dark hover:text-primary"
                  href={`${item.data.url}`}
                  target="_blank" // This will open the link in a new tab
                  rel="noopener noreferrer"
                >
                  Visítanos
                  <AiOutlineArrowRight className="ml-1.5 text-xl font-bold duration-300 group-hover:ml-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrateMedia;
