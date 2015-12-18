using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Playmowars1.Startup))]
namespace Playmowars1
{
    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}
