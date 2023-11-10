import express, { Router } from "express";
import { prisma } from "database";
import type { Listing } from "database/generated/prisma-client";

const getListings = async () => {
  let data: Listing[] = [];
  try {
    data = await prisma.listing.findMany({
      include: {
        address: {
          include: {
            parcel: {
              include: {
                assessments: true,
                landUse: true,
                zone: true,
              },
            },
          },
        },
      },
    });
  } catch (e: any) {
    console.log(e);
  } finally {
    return data;
  }
};

const router: Router = express.Router();

router.get("/", async (req, res) => {
  res.json(await getListings());
});

export default router;
