'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Search, Filter, X, Check } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { cn } from '@/lib/utils';

export default function Section7() {
  const [searchValue, setSearchValue] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [checkboxStates, setCheckboxStates] = useState({
    filterCheckbox: false,
    selectAllHosts: false,
    selectAllVendors: false,
    selectAllLeg: false,
  });

  const toggleCheckbox = (key) => {
    setCheckboxStates((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section className="bg-white min-h-screen font-sans">
      <Container className="py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto border border-neutral-200 rounded-xl shadow-lg overflow-hidden bg-white"
        >
          {/* Header */}
          <div className="bg-neutral-50 border-b border-neutral-200 px-4 py-4">
            {/* Title Row */}
            <div className="flex items-center gap-3 mb-4">
              <button
                aria-label="Back"
                className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-neutral-200 transition-colors text-neutral-500"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <h3 className="text-lg font-semibold text-neutral-800">Cookie-Liste</h3>
            </div>

            {/* Search + Filter Row */}
            <div className="flex items-center gap-2">
              {/* Search */}
              <div className="relative flex-1">
                <input
                  id="vendor-search-handler"
                  type="text"
                  name="vendor-search-handler"
                  placeholder="Suchen ..."
                  aria-label="Suche in Cookie-Listen"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg text-sm text-neutral-700 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 pointer-events-none" />
              </div>

              {/* Filter Button */}
              <button
                id="filter-btn-handler"
                aria-label="Filter Cookie-Liste"
                aria-haspopup="true"
                aria-expanded={filterOpen}
                onClick={() => setFilterOpen((prev) => !prev)}
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-neutral-700 hover:bg-neutral-800 transition-colors text-white"
              >
                <Filter className="w-4 h-4" />
              </button>
            </div>

            {/* Filter Modal */}
            {filterOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="mt-3 border border-neutral-200 rounded-lg bg-white shadow-md p-4"
              >
                {/* Filter List */}
                <ul className="mb-4 space-y-2">
                  <li>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        role="checkbox"
                        aria-checked={checkboxStates.filterCheckbox}
                        onClick={() => toggleCheckbox('filterCheckbox')}
                        className={cn(
                          'w-5 h-5 rounded border-2 flex items-center justify-center transition-colors',
                          checkboxStates.filterCheckbox
                            ? 'bg-primary-600 border-primary-600'
                            : 'border-neutral-400 bg-white'
                        )}
                      >
                        {checkboxStates.filterCheckbox && <Check className="w-3 h-3 text-white" />}
                      </button>
                      <label className="text-sm text-neutral-700 cursor-pointer" onClick={() => toggleCheckbox('filterCheckbox')}>
                        <span>checkbox label</span>
                      </label>
                      <span className="ml-auto text-xs text-neutral-500">label</span>
                    </div>
                  </li>
                </ul>

                {/* Clear + Apply/Cancel */}
                <div className="flex items-center justify-between border-t border-neutral-100 pt-3">
                  <button
                    id="clear-filters-handler"
                    className="text-sm text-neutral-500 hover:text-neutral-700 transition-colors underline"
                  >
                    Clear
                  </button>
                  <div className="flex gap-2">
                    <button
                      id="filter-apply-handler"
                      className="px-4 py-1.5 bg-primary-600 text-white text-sm rounded-lg hover:bg-primary-700 transition-colors"
                    >
                      Apply
                    </button>
                    <button
                      id="filter-cancel-handler"
                      onClick={() => setFilterOpen(false)}
                      className="px-4 py-1.5 bg-neutral-200 text-neutral-700 text-sm rounded-lg hover:bg-neutral-300 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* List Content */}
          <div className="p-4">
            {/* Select All Block */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mb-4 border border-neutral-200 rounded-lg overflow-hidden"
            >
              {/* Column Headers */}
              <div className="flex items-center justify-end gap-8 bg-neutral-100 px-4 py-2 border-b border-neutral-200">
                <span className="text-xs font-semibold text-neutral-600 uppercase tracking-wide">Consent</span>
                <span className="text-xs font-semibold text-neutral-600 uppercase tracking-wide">Leg.Interest</span>
              </div>

              {/* Checkboxes */}
              <div className="px-4 py-3 space-y-3">
                {/* Select All Hosts */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-600">checkbox label</span>
                  <div className="flex items-center gap-8">
                    <button
                      type="button"
                      role="checkbox"
                      aria-checked={checkboxStates.selectAllHosts}
                      onClick={() => toggleCheckbox('selectAllHosts')}
                      className={cn(
                        'w-5 h-5 rounded border-2 flex items-center justify-center transition-colors',
                        checkboxStates.selectAllHosts
                          ? 'bg-primary-600 border-primary-600'
                          : 'border-neutral-400 bg-white'
                      )}
                    >
                      {checkboxStates.selectAllHosts && <Check className="w-3 h-3 text-white" />}
                    </button>
                    <span className="text-xs text-neutral-500 w-16 text-center">label</span>
                  </div>
                </div>

                {/* Select All Vendors */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-600">checkbox label</span>
                  <div className="flex items-center gap-8">
                    <button
                      type="button"
                      role="checkbox"
                      aria-checked={checkboxStates.selectAllVendors}
                      onClick={() => toggleCheckbox('selectAllVendors')}
                      className={cn(
                        'w-5 h-5 rounded border-2 flex items-center justify-center transition-colors',
                        checkboxStates.selectAllVendors
                          ? 'bg-primary-600 border-primary-600'
                          : 'border-neutral-400 bg-white'
                      )}
                    >
                      {checkboxStates.selectAllVendors && <Check className="w-3 h-3 text-white" />}
                    </button>
                    <span className="text-xs text-neutral-500 w-16 text-center">label</span>
                  </div>
                </div>

                {/* Select All Leg Interest */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-600">checkbox label</span>
                  <div className="flex items-center gap-8">
                    <button
                      type="button"
                      role="checkbox"
                      aria-checked={checkboxStates.selectAllLeg}
                      onClick={() => toggleCheckbox('selectAllLeg')}
                      className={cn(
                        'w-5 h-5 rounded border-2 flex items-center justify-center transition-colors',
                        checkboxStates.selectAllLeg
                          ? 'bg-primary-600 border-primary-600'
                          : 'border-neutral-400 bg-white'
                      )}
                    >
                      {checkboxStates.selectAllLeg && <Check className="w-3 h-3 text-white" />}
                    </button>
                    <span className="text-xs text-neutral-500 w-16 text-center">label</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Vendor List (empty placeholder) */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <ul id="ot-ven-lst" className="space-y-2 text-sm text-neutral-500 italic">
                {/* Vendor entries would be injected here dynamically */}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
