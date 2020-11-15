export const routes = (router: any) => {
  return router.get("/health", (req: any, res: any) => {
    res.json({ status: "API OK" });
  });
};

export default routes;
