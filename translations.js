// Translations dictionary for English (en) and Bengali (bn)
const TRANSLATIONS = {
    en: {
        title_quote: '"bizli ka bill kaun bharega?"',
        description: "Electricity bill calculator and comparator based on tariffs from 2015 to 2026. Supports all LT, MT, HT, and EHT consumer categories.",
        primary_config: "Primary Configuration",
        cust_category: "Customer Category",
        tariff_schedule: "Tariff Schedule",
        meter_type: "Meter Type",
        prepaid: "Prepaid",
        postpaid: "Postpaid",
        energy_consumption: "Energy Consumption",
        approved_load: "Approved Load (kW)",
        bill_paid_after_due: "Bill Paid After Due Date?",
        late_payment_msg: "Postpaid bills incur a 5% late payment surcharge.",
        override_demand: "Override Actual Demand",
        override_pf: "Override Power Factor",
        calculate_bill: "Calculate Bill",
        estimated_bill: "Estimated Total Bill",
        itemized_breakdown: "Itemized Breakdown",
        energy_charge: "Energy Charge",
        demand_charge: "Demand Charge",
        prepaid_rebate: "Prepaid Rebate",
        net_bill: "Net Bill (Before VAT)",
        govt_vat: "Govt. VAT",
        total_payable: "Total Payable",
        disclaimer_title: "Disclaimer",
        disclaimer_body: "Calculations are estimates based on official gazettes and may contain errors. Please verify with the sources linked above and below.",
        bpdb_source: "BPDB Source Repository",
        historical_trend: "Historical Bill Trend",
        compare_vs: "Compare Vs",
        opt_prev: "Previous Tariff",
        opt_first: "First Tariff",
        opt_last: "Latest Tariff",
        pf_surcharge_title: "PF Surcharge Triggered",
        pf_surcharge_body: "Your PF is below standard. A strict penalty will be applied to your base Energy Charge."
    },
    bn: {
        title_quote: '"বিদ্যুৎ বিল কে দেবে?"',
        description: "২০১৫ থেকে ২০২৬ সালের অফিশিয়াল গ্যাজেটের উপর ভিত্তি করে বিদ্যুৎ বিল হিসাবকারী এবং তুলনাকারী। এটি সকল LT, MT, HT, এবং EHT গ্রাহক শ্রেণী সমর্থন করে।",
        primary_config: "প্রাথমিক কনফিগারেশন",
        cust_category: "গ্রাহকের শ্রেণী",
        tariff_schedule: "ট্যারিফ সময়সূচী",
        meter_type: "মিটারের ধরন",
        prepaid: "প্রিপেইড",
        postpaid: "পোস্টপেইড",
        energy_consumption: "বিদ্যুৎ ব্যবহার",
        approved_load: "অনুমোদিত লোড (kW)",
        bill_paid_after_due: "বিল কি নির্ধারিত তারিখের পরে পরিশোধ করা হয়েছে?",
        late_payment_msg: "পোস্টপেইড বিলে বিলম্ব ফি হিসেবে ৫% সারচার্জ যুক্ত হবে।",
        override_demand: "প্রকৃত ডিমান্ড পরিবর্তন",
        override_pf: "পাওয়ার ফ্যাক্টর পরিবর্তন",
        calculate_bill: "বিল হিসাব করুন",
        estimated_bill: "আনুমানিক মোট বিল",
        itemized_breakdown: "বিস্তারিত হিসাব",
        energy_charge: "বিদ্যুৎ বিল (এনার্জি চার্জ)",
        demand_charge: "ডিমান্ড চার্জ",
        prepaid_rebate: "প্রিপেইড রেয়াত (ছাড়)",
        net_bill: "মোট বিল (ভ্যাট ব্যতীত)",
        govt_vat: "সরকারি ভ্যাট",
        total_payable: "সর্বমোট প্রদেয় বিল",
        disclaimer_title: "দাবিত্যাগ",
        disclaimer_body: "হিসাবসমূহ অফিশিয়াল গ্যাজেটের উপর ভিত্তি করে করা এবং এতে ভুল থাকতে পারে। অনুগ্রহ করে নিচে দেওয়া লিঙ্ক থেকে যাচাই করে নিন।",
        bpdb_source: "বিপিডিবি সোর্স রিপোজিটরি",
        historical_trend: "ঐতিহাসিক বিলের ধারা",
        compare_vs: "তুলনা করুন",
        opt_prev: "পূর্ববর্তী ট্যারিফ",
        opt_first: "প্রথম ট্যারিফ",
        opt_last: "সর্বশেষ ট্যারিফ",
        pf_surcharge_title: "পিএফ সারচার্জ আরোপিত",
        pf_surcharge_body: "আপনার পাওয়ার ফ্যাক্টর স্ট্যান্ডার্ডের নিচে। আপনার মূল বিদ্যুৎ বিলের উপর জরিমানা আরোপিত হবে।"
    }
};

// Translates any generic string (numbers, month names, categories) dynamically
function translateText(text, lang) {
    if (!text) return '';
    if (lang !== 'bn') return text;

    const months = {
        'January': 'জানুয়ারি', 'February': 'ফেব্রুয়ারি', 'March': 'মার্চ',
        'April': 'এপ্রিল', 'May': 'মে', 'June': 'জুন',
        'July': 'জুলাই', 'August': 'আগস্ট', 'September': 'সেপ্টেম্বর',
        'October': 'অক্টোবর', 'November': 'নভেম্বর', 'December': 'ডিসেম্বর'
    };

    const digits = {
        '0': '০', '1': '১', '2': '২', '3': '৩', '4': '৪',
        '5': '৫', '6': '৬', '7': '৭', '8': '৮', '9': '৯'
    };

    const categories = {
        'Residential': 'আবাসিক',
        'Agricultural Pump': 'কৃষি সেচ পাম্প',
        'Small Industries': 'ক্ষুদ্র শিল্প',
        'Non-Residential Light & Power': 'অ-আবাসিক লাইট ও পাওয়ার',
        'Commercial & Office': 'বাণিজ্যিক ও অফিস',
        'Medium Voltage': 'মধ্যম ভোল্টেজ',
        'High Voltage': 'উচ্চ ভোল্টেজ',
        'Extra High Voltage': 'অতি উচ্চ ভোল্টেজ',
        'Street Light and Water Pump': 'রাস্তার আলো ও পানির পাম্প',
        'Battery Charging Station': 'ব্যাটারি চার্জিং স্টেশন',
        'Charitable Institution': 'দাতব্য প্রতিষ্ঠান',
        'Temporary': 'অস্থায়ী',
        'Flat': 'ফ্ল্যাট',
        'Slab': 'স্ল্যাব',
        'Normal': 'সাধারণ',
        'Peak': 'পিক আওয়ার',
        'Off-Peak': 'অফ-পিক',
        'Super Off-Peak': 'সুপার অফ-পিক',
        'Total Usage': 'মোট ব্যবহার',
        'Tk': 'টাকা',
        'kWh': 'কিলোওয়াট-ঘণ্টা',
        'kW': 'কিলোওয়াট',
        'units': 'ইউনিট'
    };

    let res = String(text);

    // Replace category descriptors
    for (const [en, bn] of Object.entries(categories)) {
        res = res.replace(new RegExp('\\b' + en + '\\b', 'gi'), bn);
        // Fallback for non-boundary matches like "Slab 1"
        if (en === 'Slab' || en === 'Total Usage' || en === 'Tk') {
            res = res.replace(new RegExp(en, 'gi'), bn);
        }
    }

    // Replace months
    for (const [en, bn] of Object.entries(months)) {
        res = res.replace(new RegExp(en, 'gi'), bn);
    }

    // Replace digits
    for (const [en, bn] of Object.entries(digits)) {
        res = res.replace(new RegExp(en, 'g'), bn);
    }

    return res;
}

// Formats number to localized string with correct digit translation
function formatNumber(num, lang) {
    const formatted = Number(num).toFixed(2);
    if (lang === 'bn') {
        const digits = {
            '0': '০', '1': '১', '2': '২', '3': '৩', '4': '৪',
            '5': '৫', '6': '৬', '7': '৭', '8': '৮', '9': '৯'
        };
        return formatted.split('').map(char => digits[char] || char).join('');
    }
    return formatted;
}

// Scans elements with data-translate attribute and updates their text
function applyStaticTranslations(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    const dict = TRANSLATIONS[lang] || TRANSLATIONS['en'];
    elements.forEach(el => {
        const key = el.getAttribute('data-translate');
        if (dict[key]) {
            el.textContent = dict[key];
        }
    });
}
