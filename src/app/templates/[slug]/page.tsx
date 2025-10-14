'use client'

import TeamplateDetails from '@/components/template-details';
import products_data from '@/data/products-data';
// import React, { use } from "react";
// import team_data from '../../../../data/team-data';
// import Breadcrumb from '../../../../component/shead/Breadcrumb/Breadcrumb';
// import Footer2 from '../../../../component/shead/Footer/Footer2';
// import TeamDetailsDynamic from '../../../../component/team-details/TeamDetailsDynamic';
import { notFound } from 'next/navigation'; 
import { use } from 'react';
import slugify from "slugify";  
 
 

// Accept Promise for `params`, unwrap it with `use()`
export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params); // unwrap Promise

  const single_product = products_data.find(
    (item) => slugify(item.title, { lower: true }) === slug
  );

  if (!single_product) notFound();

  return (
    // <div>
    //   <Breadcrumb
    //     title="Team Details"
    //     homeLabel="Home"
    //     homeLink="/"
    //     page="Team Details"
    //   />
    //   <TeamDetailsDynamic single_product={single_product} />
    //   <Footer2 />
    // </div>
    <TeamplateDetails single_product={single_product}  />
  );
}
