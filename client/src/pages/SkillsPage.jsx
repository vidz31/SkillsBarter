import React from "react";
import SkillOfferedList from "../components/SkillOfferedList";
import SkillAddForm from "../components/SkillAddForm";
import SkillNeededList from "../components/SkillNeededList";
import SkillNeededAddForm from "../components/SkillNeededAddForm";
import GlobalExchangePreferences from "../components/GlobalExchangePreferences";

const SkillsPage = () => {
  return (
    <div className="max-w-5xl mx-auto py-8 px-2 md:px-0">
      <h1 className="text-3xl font-bold mb-2">Skill Management</h1>
      <p className="text-gray-600 mb-6 text-sm">
        Curate your skill profile by adding, editing, or removing skills you offer
        and skills you need. Define how and where you prefer to exchange your
        knowledge.
      </p>
      <div className="space-y-8">
        <section className="bg-white rounded-xl shadow p-6">
          <SkillOfferedList />
          <SkillAddForm />
        </section>
        <section className="bg-white rounded-xl shadow p-6">
          <SkillNeededList />
          <SkillNeededAddForm />
        </section>
        <section className="bg-white rounded-xl shadow p-6">
          <GlobalExchangePreferences />
        </section>
      </div>
    </div>
  );
};

export default SkillsPage;
