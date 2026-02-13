import { ShieldCheck, Factory, Globe, Truck, Zap, HardHat, Train, Cpu, Activity, Anchor, Building2, TowerControl } from 'lucide-react';

export const industriesData = [
    {
        id: 'construction',
        name: 'Construction Industry',
        slug: 'construction',
        icon: HardHat,
        shortDesc: 'Providing highly qualified personnel for complex construction and infrastructure projects.',
        fullDesc: 'In the dynamic construction industry, the demand for skilled resources and expertise has never been more critical. We provide project managers, civil engineers, structural engineers, and safety officers to ensure your projects are executed efficiently. Our professionals have supported residential, commercial, and infrastructure projects across India and the Middle East.',
        challenges: 'Shortage of skilled labor, safety compliance, and timely delivery of complex projects.',
        solutions: 'Deploying safety-compliant teams, experienced site supervisors, and specialized engineers for architectural and structural works.'
    },
    {
        id: 'defence',
        name: 'Defence & Aerospace',
        slug: 'defence',
        icon: ShieldCheck,
        shortDesc: 'Delivering skilled resources for precision, innovation, and compliant defence projects.',
        fullDesc: 'In the highly specialized defence and aerospace industry, we provide program managers, avionics engineers, and quality assurance specialists. We support military aircraft manufacturing, defence systems integration, and missile development programs with a focus on regulatory compliance and operational excellence.',
        challenges: 'Stringent security regulations, need for high-precision engineering skills, and complex project execution.',
        solutions: 'Vetted workforce with specific expertise in aerospace structural analysis, systems integration, and safety management.'
    },
    {
        id: 'iron-steel',
        name: 'Iron & Steel',
        slug: 'iron-steel',
        icon: Anchor, // Using Anchor as a proxy for heavy metal/strength if Anvil isn't available, or generic Factory
        shortDesc: 'Skilled resources for strength, durability, and operational efficiency in steel plants.',
        fullDesc: 'We specialize in providing qualified personnel like metallurgical engineers, process engineers, and maintenance staff for steel manufacturing plants, rolling mills, and foundries. We help navigate challenges like raw material fluctuations and sustainable practice requirements.',
        challenges: 'Fluctuating raw material prices, regulatory compliance, and maintaining continuous production safety.',
        solutions: 'Experienced metallurgical and maintenance teams to enhance productivity and reliability of plant operations.'
    },
    {
        id: 'renewable-energy',
        name: 'Renewable Energy',
        slug: 'renewable-energy',
        icon: Zap,
        shortDesc: 'Skilled experts for solar, wind, and sustainable energy initiatives.',
        fullDesc: 'As the global shift towards sustainable energy accelerates, we provide renewable energy engineers, project managers, and installation technicians for solar power plants, wind farms, and hydroelectric stations. We ensure your green energy projects are executed efficiently.',
        challenges: 'Rapid technological advancements, remote installation sites, and grid integration complexities.',
        solutions: 'Specialized teams for installation & commissioning, and ongoing maintenance of renewable energy assets.'
    },
    {
        id: 'oil-gas',
        name: 'Oil & Gas',
        slug: 'oil-gas',
        icon: Globe, // Keeping Globe or changing to Flame/Droplet if available
        shortDesc: 'Expert solutions for exploration, production, and refinery operations.',
        fullDesc: 'We address skills shortages in the oil and gas sector by providing petroleum engineers, drilling engineers, and safety officers. Our experience spans refineries, gas processing plants, and LNG terminals, ensuring operational efficiency and safety compliance.',
        challenges: 'Hazardous environments, capital project execution, and strict environmental regulations.',
        solutions: 'Certified safety professionals and specialized engineers for drilling, piping, and refinery operations.'
    },
    {
        id: 'railways-metro',
        name: 'Railways & Metro',
        slug: 'railways-metro',
        icon: Train,
        shortDesc: 'Skilled professionals for modern rail systems and metro infrastructure.',
        fullDesc: 'We provide rail systems engineers, signaling engineers, and safety officers for urban metro systems, high-speed rail, and freight operations. We focus on enhancing safety, efficiency, and passenger experience in the rapidly evolving transport sector.',
        challenges: 'Urbanization demands, safety critical systems, and complex infrastructure integration.',
        solutions: 'Qualified experts for signaling, track maintenance, and civil engineering for seamless connectivity.'
    },
    {
        id: 'ibms',
        name: 'IBMS (Smart Buildings)',
        slug: 'ibms',
        icon: Building2,
        shortDesc: 'Optimizing building performance with Integrated Building Management Systems.',
        fullDesc: 'We provide IBMS engineers and system integrators for commercial, institutional, and healthcare facilities. Our focus is on energy efficiency, occupant comfort, and operational reliability through smart building technologies.',
        challenges: 'Integrating diverse building systems, energy efficiency targets, and operational reliability.',
        solutions: 'Skilled IBMS engineers to manage automation, HVAC, and security systems for smart infrastructure.'
    },
    {
        id: 'transmission',
        name: 'Transmission & Distribution',
        slug: 'transmission',
        icon: TowerControl,
        shortDesc: 'Reliable resources for power transmission lines and substations.',
        fullDesc: 'We supply transmission engineers, substation engineers, and field supervisors for power transmission lines, distribution networks, and electrification projects. We help ensure reliable power delivery amidst aging infrastructure and renewable integration challenges.',
        challenges: 'Aging infrastructure, grid modernization, and regulatory compliance.',
        solutions: 'Experienced field teams and planners to support grid stability and expansion projects.'
    },
    {
        id: 'cement',
        name: 'Cement Industry',
        slug: 'cement',
        icon: Factory,
        shortDesc: 'Skilled resources for efficient cement plant operations and expansion.',
        fullDesc: 'We support the cement industry with structural engineers, mechanical engineers, and QA/QC specialists. Our experience covers cement plants, blast furnaces, and material handling systems, focusing on production efficiency and cost optimization.',
        challenges: 'Capital project execution, environmental regulations, and production efficiency.',
        solutions: 'DEPLOYING specialized engineering and maintenance teams for plant operations and upgrades.'
    }
];
