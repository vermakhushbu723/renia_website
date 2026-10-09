// Real photos (Unsplash)
export const photo = (id, w = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`

export const company = {
  brand: 'Grandeur Bath',
  legal: 'Ishan Tubes Private Limited',
  phone: '+91 88263 77525',
  phoneRaw: '+918826377525',
  whatsapp: '918826377525',
  email: 'info@grandeurbath.com',
  address: '100, Prakash Industrial Estate, Near Raj Bagh Metro Station, Sahibabad, Ghaziabad, Uttar Pradesh',
  gstin: '09AACC19122J1ZE',
}

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/hospitality', label: 'Hotels and Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export const categories = [
  { key: 'showers', label: 'Showers', icon: 'shower', color: 'blue', img: 'photo-1584622650111-993a426fbf0a', text: 'Rain showers, hand showers and shower arms' },
  { key: 'faucets', label: 'Basin Faucets', icon: 'wash-your-hands', color: 'orange', img: 'photo-1576698483491-8c43f0862543', text: 'Wall-mount and deck-mount lavatory faucets' },
  { key: 'bath', label: 'Bathtubs and Spouts', icon: 'bathtub', color: 'teal', img: 'photo-1620626011761-996317b8d101', text: 'Freestanding tubs, tub spouts and trims' },
  { key: 'basins', label: 'Sinks and Wash Basins', icon: 'soap', color: 'purple', img: 'photo-1564540583246-934409427776', text: 'Counter-top, vessel and wall-hung basins' },
  { key: 'wc', label: 'WC, Cisterns and Health Faucets', icon: 'toilet-bowl', color: 'navy', img: 'photo-1631889993959-41b4e9c6e3c5', text: 'Wall-hung WCs, concealed cisterns and sprays' },
  { key: 'kitchen', label: 'Kitchen Faucets and Sinks', icon: 'frying-pan', color: 'red', img: 'photo-1600566752229-250ed79470f8', text: 'Pull-down faucets and premium kitchen sinks' },
  { key: 'valves', label: 'Valves and Concealed', icon: 'wrench', color: 'green', img: 'photo-1585704032915-c3400ca199e7', text: 'Angle valves, stop trims and diverters' },
  { key: 'vanity', label: 'Vanities and Accessories', icon: 'mirror', color: 'pink', img: 'photo-1600488999585-e4364713b90a', text: 'Vanity units, mirrors and bath accessories' },
]

// Items and MRPs from the Grandeur Bath quotation format
export const products = [
  { code: 'ISH1118', name: 'Delta 10 inch H2Okinetic Shower', cat: 'showers', mrp: 21100, finish: 'Chrome', img: 'photo-1584622650111-993a426fbf0a', tag: 'Bestseller' },
  { code: 'S777', name: 'Delta 5 inch Multi-Function Handshower with H2Okinetic and Mist Spray', cat: 'showers', mrp: 15900, finish: 'Chrome', img: 'photo-1629079447777-1e605162dc8d' },
  { code: 'RP70171PR', name: 'Single Function 6 inch Square Showerhead with H2Okinetic', cat: 'showers', mrp: 14000, finish: 'Lumicoat Polished Chrome', img: 'photo-1552321554-5fefe8c9ef14', tag: 'New' },
  { code: 'RP49139', name: 'Delta Shower Arm', cat: 'showers', mrp: 2830, finish: 'Chrome', img: 'photo-1600566752355-35792bedcfea' },
  { code: 'U4993-PK', name: 'Delta 6 inch Wall-Mount Shower Arm with Round Flange', cat: 'showers', mrp: 1145, finish: 'Chrome', img: 'photo-1604709177225-055f99402ea3' },
  { code: 'T31339-WL', name: 'Kami Single-Handle Wall-Mount Lavatory Faucet Trim', cat: 'faucets', mrp: 15900, finish: 'Chrome', img: 'photo-1595514535415-dae8580c416c', tag: 'Bestseller' },
  { code: 'T853339', name: 'Kami In-Wall Tub and Shower Trim', cat: 'bath', mrp: 7420, finish: 'Chrome', img: 'photo-1603825491103-bd638b1873b0' },
  { code: 'ITS62339', name: 'Kami Tub Spout with Diverter to Handshower with Flange', cat: 'bath', mrp: 10100, finish: 'Chrome', img: 'photo-1507652313519-d4e9174996dd' },
  { code: 'ITS61339', name: 'Kami Tub Spout', cat: 'bath', mrp: 7400, finish: 'Chrome', img: 'photo-1620626011761-996317b8d101' },
  { code: '22901-I', name: 'Contemporary Health Faucet', cat: 'wc', mrp: 2780, finish: 'Chrome', img: 'photo-1631889993959-41b4e9c6e3c5' },
  { code: 'T75002', name: 'Korby Concealed Stop Trim for 1/2 and 3/4 inch Rough', cat: 'valves', mrp: 1550, finish: 'Chrome', img: 'photo-1585704032915-c3400ca199e7' },
  { code: 'IAO36005', name: 'Rectangular Quarter-Turn Angle Valve with Flange', cat: 'valves', mrp: 1810, finish: 'Chrome', img: 'photo-1576698483491-8c43f0862543' },
  { code: '91355', name: 'Delta Ixa Jive Pull Down Kitchen Faucet', cat: 'kitchen', mrp: 17600, finish: 'Chrome', img: 'photo-1600566752229-250ed79470f8', tag: 'Premium' },
]

export const spaces = [
  { title: 'Master Bathroom', icon: 'bath', img: 'photo-1603825491103-bd638b1873b0', text: 'Rain showers, tub spouts and statement faucets.' },
  { title: 'Guest Bathroom', icon: 'shower', img: 'photo-1629079447777-1e605162dc8d', text: 'Elegant, durable fittings for everyday use.' },
  { title: 'Kitchen', icon: 'frying-pan', img: 'photo-1556912173-3bb406ef7e77', text: 'Pull-down faucets built for busy kitchens.' },
  { title: 'Hotel Suites', icon: 'bed', img: 'photo-1631049307264-da0ec9d70304', text: 'Room-wise packages for hotels and resorts.' },
]

export const whyUs = [
  { icon: 'guarantee', color: 'green', title: '100% genuine products', text: 'Sourced directly with full manufacturer warranty.' },
  { icon: 'discount', color: 'blue', title: 'Hotel project pricing', text: 'Special room-wise pricing for hotels and builders.' },
  { icon: 'delivery', color: 'orange', title: 'Safe delivery', text: 'Careful packing and on-time delivery to your site.' },
  { icon: 'tools', color: 'purple', title: 'Installation support', text: 'Guidance for plumbers and site teams.' },
  { icon: 'receipt', color: 'teal', title: 'GST invoice', text: 'Proper GST invoices and clear quotations.' },
  { icon: 'headset', color: 'navy', title: 'After-sales service', text: 'Quick help with spares and warranty claims.' },
]

export const projectSteps = [
  { icon: 'ruler', color: 'blue', title: 'Requirement', text: 'Share your drawings or room list with us.' },
  { icon: 'document', color: 'orange', title: 'Room-wise quotation', text: 'Get a quotation for every bathroom and kitchen.' },
  { icon: 'approval', color: 'purple', title: 'Sample approval', text: 'See finishes and approve samples.' },
  { icon: 'package', color: 'teal', title: 'Delivery', text: 'Phased delivery as your site progresses.' },
  { icon: 'wrench', color: 'green', title: 'Installation support', text: 'Our team guides your plumbers on site.' },
]

export const segments = [
  { icon: 'spa', title: 'Hotels and Resorts', img: 'photo-1566073771259-6a8506099945', text: 'Durable luxury fittings for guest rooms, spas and public washrooms.' },
  { icon: 'crane', title: 'Builders and Developers', img: 'photo-1600566753190-17f0baa2a6c3', text: 'Bulk supply for apartments and villas with phased delivery.' },
  { icon: 'home', title: 'Homes and Villas', img: 'photo-1600047509807-ba8f99d2cdde', text: 'Design help to pick the right finish for every bathroom.' },
]

export const gallery = [
  { img: 'photo-1600566752355-35792bedcfea', title: 'Modern master bath', place: 'Private villa, Noida' },
  { img: 'photo-1564540583246-934409427776', title: 'Marble twin vanity', place: 'Penthouse, Gurugram' },
  { img: 'photo-1582719478250-c89cae4dc85b', title: 'Boutique hotel suites', place: 'Hotel project, Jaipur' },
  { img: 'photo-1595514535415-dae8580c416c', title: 'Matte black basins', place: 'Residence, Delhi' },
  { img: 'photo-1542314831-068cd1dbfeeb', title: 'Resort bathrooms', place: 'Resort project, Goa' },
  { img: 'photo-1604709177225-055f99402ea3', title: 'Guest bathroom', place: 'Apartment, Ghaziabad' },
  { img: 'photo-1631889993959-41b4e9c6e3c5', title: 'Wall-hung WC and tub', place: 'Residence, Ghaziabad' },
  { img: 'photo-1629079447777-1e605162dc8d', title: 'Walk-in shower', place: 'Apartment, Noida' },
]

export const stats = [
  { value: '15+', label: 'Years of experience' },
  { value: '500+', label: 'Projects delivered' },
  { value: '120+', label: 'Hotels and resorts' },
  { value: '2000+', label: 'Products in range' },
]

export const testimonials = [
  {
    name: 'Rajesh Mehta',
    role: 'Owner, Private Villa, Noida',
    img: 'photo-1507003211169-0a1dd7228f2d',
    text: 'Grandeur Bath gave us a room-wise quotation for all five bathrooms. The H2Okinetic showers feel amazing and delivery was on time.',
  },
  {
    name: 'Priya Sharma',
    role: 'Purchase Head, Boutique Hotel Group',
    img: 'photo-1573496359142-b8d87734a5a2',
    text: 'We fitted 64 guest rooms with their package. Clear pricing, genuine products and quick help whenever our site team needed it.',
  },
  {
    name: 'Amit Verma',
    role: 'Architect, Verma Design Studio',
    img: 'photo-1472099645785-5658abf4ff4e',
    text: 'I recommend them to my clients because the finishes match the samples exactly and the after-sales support is reliable.',
  },
  {
    name: 'Neha Kapoor',
    role: 'Interior Designer, Delhi',
    img: 'photo-1580489944761-15a19d654956',
    text: 'Beautiful range of faucets and showers. Their team helps choose the right valves and trims so installation goes smoothly.',
  },
]

export const faqs = [
  { q: 'Do you supply to hotels and large projects?', a: 'Yes. We supply luxury bath and kitchen fittings to hotels, resorts, builders and architects with special project pricing and phased delivery.' },
  { q: 'Are all products genuine with warranty?', a: 'Yes. Every product is 100% genuine and comes with the manufacturer warranty and a proper GST invoice.' },
  { q: 'How do I get a quotation?', a: 'Add products to your quote list on this website or share your requirement on call or WhatsApp. We send a room-wise quotation, usually within 24 hours.' },
  { q: 'Do you deliver outside Delhi NCR?', a: 'Yes. We deliver across India with safe packing. Freight is charged as per actual or included in project quotations.' },
  { q: 'Can I see the products before buying?', a: 'Yes. You can visit our Sahibabad office or ask for samples and finish options for project approvals.' },
  { q: 'Do you help with installation?', a: 'Our team guides your plumber or site team on rough-in, concealed parts and trims so the installation is right the first time.' },
]

export const inr = (n) => n.toLocaleString('en-IN')
